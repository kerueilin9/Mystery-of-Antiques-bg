<template>
  <n-modal v-model:show="showModal">
    <n-card
      class="max-w-90 w-96"
      title="使用技能"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <div v-if="playerData.character === 'LaoChaofeng'">
        <n-checkbox v-model:checked="LaoChaofengSkill">
          之後玩家看到的真假互換(同陣營和姬雲浮不適用)
        </n-checkbox>
      </div>
      <div v-else-if="playerData.character === 'ZhengGuoqu'">
        <n-radio-group v-model:value="coveredAnimal" name="radiogroup">
          <n-space>
            <n-radio
              v-for="animal in animals"
              :key="animal.name"
              :value="animal.name"
              :label="animal.name"
            />
          </n-space>
        </n-radio-group>
      </div>
      <n-select
        v-else-if="playerData.character === 'MedicineIsNot'"
        v-model:value="attackedPlayer"
        :options="medicineIsNotOptions"
      />
      <n-select
        v-else-if="playerData.character === 'FangZhen'"
        v-model:value="checkedPlayer"
        :options="options"
      />
      <template #footer>
        <div class="flex justify-end mt-8">
          <div>
            <n-button size="large" @click="showModal = false">返回</n-button>
          </div>
          <div>
            <n-button
              v-if="isAbleToCheck"
              size="large"
              type="primary"
              :loading="isLoading"
              :disabled="!isSubmitAble"
              @click="handleSubmit()"
              >確認</n-button
            >
          </div>
        </div>
      </template>
      <n-card title="鑑定結果" v-if="playerResult.length !== 0">
        {{ playerResult }}
      </n-card>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { Animal, Player } from "@/types";
import { db } from "@/firebaseConfig";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  DocumentData,
  where,
  query,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { SelectGroupOption, SelectOption, useMessage } from "naive-ui";
import { useRoute, useRouter } from "vue-router";
import {
  increaseValue,
  setPlayerRecord,
  setValue,
} from "@/hooks/setFirebaseData";
import { getPlayerDataByCharacter } from "@/hooks/getFirebaseData";

const path = "/Mystery-of-Antiques-bg";
const message = useMessage();
const route = useRoute();
const router = useRouter();
const options = ref<SelectOption[]>();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const showModal = defineModel("showModal");
const currentRound = defineModel<number>("currentRound");
const playerData = defineModel<Player>("playerData");
const animals = ref<Animal[]>();
const LaoChaofengSkill = ref(false);
const attackedPlayer = ref("");
const coveredAnimal = ref("");
const checkedPlayer = ref("");
const playerResult = ref("");

const isLoading = ref(false);
const isAbleToCheck = ref(true);

const goodCharacters = [
  "MakeAWish",
  "FangZhen",
  "JiYunfu",
  "KidoKana",
  "HuangYanyan",
];

const isSubmitAble = computed(() => {
  return !(
    !LaoChaofengSkill.value &&
    attackedPlayer.value.length === 0 &&
    coveredAnimal.value.length === 0 &&
    checkedPlayer.value.length === 0
  );
});

const medicineIsNotOptions = ref<Array<SelectOption | SelectGroupOption>>([]);

const getPlayers = async () => {
  try {
    const playersCollectionRef = collection(roomRef, "players");
    const querySnapshot = await getDocs(playersCollectionRef);
    const actedPlayers: SelectOption[] = [];
    const pendingPlayers: SelectOption[] = [];
    const allPlayers: SelectOption[] = [];
    querySnapshot.forEach((doc) => {
      const playerData = doc.data() as DocumentData;
      if (playerData.remain) {
        const player: SelectOption = {
          label: playerData.name,
          value: playerData.character,
        };
        pendingPlayers.push(player);
      } else {
        const player: SelectOption = {
          label: playerData.name,
          value: playerData.character,
        };
        actedPlayers.push(player);
      }
      const player: SelectOption = {
        label: playerData.name,
        value: playerData.character,
      };
      allPlayers.push(player);
    });
    options.value = allPlayers;
    console.log(options.value);
    medicineIsNotOptions.value = [
      {
        type: "group",
        label: "本輪已行動的玩家",
        key: "acted",
        children: actedPlayers,
      },
      {
        type: "group",
        label: "本輪還未行動的玩家",
        key: "pending",
        children: pendingPlayers,
      },
    ];
  } catch (err) {}
};

const getCurrentRoundAnimal = async () => {
  try {
    console.log(currentRound.value);
    const animalsCollectionRef = collection(
      roomRef,
      `ReadomAnimalForRound${currentRound.value}`
    );
    const querySnapshot = await getDocs(animalsCollectionRef);
    const fetchedAnimals: Animal[] = [];
    querySnapshot.forEach((doc) => {
      const animalData = doc.data() as DocumentData;
      const animal: Animal = {
        name: animalData.name,
        value: animalData.value,
        view_value: animalData.view_value,
      };
      fetchedAnimals.push(animal);
    });
    console.log(fetchedAnimals);
    animals.value = fetchedAnimals;
  } catch (err) {}
};

const toggleViewValue = async (docId: string) => {
  try {
    const docRef = doc(
      roomRef,
      `ReadomAnimalForRound${currentRound.value}`,
      docId
    );

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const currentValue = docSnap.data().view_value;

      if (currentValue >= 0) {
        const newValue = currentValue === 1 ? 0 : 1;
        await setDoc(docRef, { view_value: newValue }, { merge: true });
      }
    } else {
      console.warn("無對應資料");
    }
  } catch (err) {
    console.error("老嘲諷技能問題: ", err);
  }
};

const changeTrueFalse = async (isActivate: boolean) => {
  if (isActivate) {
    try {
      const querySnapshot = await getDocs(
        collection(roomRef, `ReadomAnimalForRound${currentRound.value}`)
      );

      querySnapshot.forEach((doc) => {
        toggleViewValue(doc.id);
      });
      setPlayerRecord(
        roomRef,
        playerData.value.name,
        currentRound.value,
        "使用了技能"
      );
    } catch (error) {
      console.error("老嘲諷技能問題: ", error);
    }
  }
};

const setCoveredAnimal = async (animal: string) => {
  try {
    const q = query(
      collection(roomRef, `ReadomAnimalForRound${currentRound.value}`),
      where("name", "==", animal)
    );
    const snapshot = await getDocs(q);
    let updatePromises = snapshot.docs.map((docSnapshot) => {
      if (docSnapshot.data().value === 1) {
        updateDoc(docSnapshot.ref, { value: -1, view_value: -1 });
      } else if (docSnapshot.data().value === 0) {
        updateDoc(docSnapshot.ref, { value: -2, view_value: -2 });
      }
    });

    await Promise.all(updatePromises);
    setPlayerRecord(
      roomRef,
      playerData.value.name,
      currentRound.value,
      `你將${animal}隱藏`
    );
  } catch (err) {
    console.log("鄭國渠技能問題：" + err);
  }
};

const attackingPlayer = async (character: string) => {
  try {
    await increaseValue(
      roomRef,
      "players",
      "character",
      character,
      "attacked",
      1
    );
    if (character === "FangZhen") {
      await increaseValue(
        roomRef,
        "players",
        "character",
        "MakeAWish",
        "attacked",
        1
      );
    }
    if (character === "JiYunfu") {
      await increaseValue(
        roomRef,
        "players",
        "character",
        character,
        "attacked",
        10
      );
    }
    const player = await getPlayerDataByCharacter(roomRef, character);
    setPlayerRecord(
      roomRef,
      playerData.value.name,
      currentRound.value,
      `你襲擊了${player.name}`
    );
  } catch (err) {
    console.log("藥不然技能問題：" + err);
  }
};

const checkPlayer = async (character: string) => {
  playerResult.value = `此玩家是${
    goodCharacters.includes(character) ? "好人" : "壞人"
  }`;
  const player = await getPlayerDataByCharacter(roomRef, character);
  setPlayerRecord(
    roomRef,
    playerData.value.name,
    currentRound.value,
    `你驗了${player.name}，${playerResult.value}`
  );
};

const handleSubmit = async () => {
  if (playerData.value.isSkillAble > currentRound.value) {
    message.warning("本輪已使用過");
  } else if (playerData.value.attacked > 0) {
    message.warning("你被藥不然偷襲了!!!", { closable: true, duration: 0 });
    isAbleToCheck.value = false;
    setValue(
      roomRef,
      "players",
      "name",
      playerData.value.name,
      "isSkillAble",
      currentRound.value + 1
    );
  } else {
    switch (playerData.value.character) {
      case "LaoChaofeng":
        isLoading.value = true;
        await changeTrueFalse(LaoChaofengSkill.value);
        showModal.value = false;
        isLoading.value = false;
        break;
      case "MedicineIsNot":
        isLoading.value = true;
        await attackingPlayer(attackedPlayer.value);
        showModal.value = false;
        isLoading.value = false;
        break;
      case "ZhengGuoqu":
        isLoading.value = true;
        await setCoveredAnimal(coveredAnimal.value);
        showModal.value = false;
        isLoading.value = false;
        break;
      case "FangZhen":
        isLoading.value = true;
        await checkPlayer(checkedPlayer.value);
        isAbleToCheck.value = false;
        isLoading.value = false;
        break;
    }
    setValue(
      roomRef,
      "players",
      "name",
      playerData.value.name,
      "isSkillAble",
      currentRound.value + 1
    );
  }
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) {
      if (playerData.value.isSkillAble <= currentRound.value)
        isAbleToCheck.value = true;
      else isAbleToCheck.value = false;
    }
    if (playerData.value.character === "ZhengGuoqu") getCurrentRoundAnimal();
    if (
      playerData.value.character === "FangZhen" ||
      playerData.value.character === "MedicineIsNot"
    )
      getPlayers();
  }
);
</script>
