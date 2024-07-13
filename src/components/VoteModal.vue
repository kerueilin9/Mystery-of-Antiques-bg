<template>
  <n-modal v-model:show="showModal" :mask-closable="true">
    <n-card
      style="width: 400px"
      title="投票"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-select v-model:value="animal" :options="options" multiple />

      <template #footer>
        <div class="flex justify-end mt-8">
          <div>
            <n-button size="large" type="warning" @click="handleNextRound()">{{
              `${roundOver ? "前往下一回合" : "返回"}`
            }}</n-button>
          </div>
          <div>
            <n-button
              v-if="isAbleToCheck"
              size="large"
              type="primary"
              @click="handleSubmit()"
              >確認</n-button
            >
          </div>
        </div>
      </template>
      <n-card title="鑑定結果" v-if="result.length !== 0">
        {{ result }}
      </n-card>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
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
  increment,
} from "firebase/firestore";
import { SelectOption, useMessage } from "naive-ui";
import { useRoute, useRouter } from "vue-router";
import { Animal, Player } from "@/types";
import {
  increaseValue,
  increaseValueWithDB,
  setRTRoomValue,
  setValue,
} from "@/hooks/setFirebaseData";
const route = useRoute();
const router = useRouter();
const message = useMessage();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const showModal = defineModel("showModal");
const currentRound = defineModel<number>("currentRound");
const playerData = defineModel<Player>("playerData");
const currentRoundAnimals = ref<SelectOption[]>();
const options = ref<SelectOption[]>();
const animal = ref<string | (string | number)[]>(null);
const result = ref("");
const isAbleToCheck = ref(true);
const roundOver = ref(false);

const getRoundAnimal = async (Round: number) => {
  try {
    const animalsCollectionRef = collection(
      roomRef,
      `ReadomAnimalForRound${Round}`
    );
    const querySnapshot = await getDocs(animalsCollectionRef);
    const fetchedAnimals: SelectOption[] = [];
    querySnapshot.forEach((doc) => {
      const animalData = doc.data() as DocumentData;
      const animal: SelectOption = {
        label: animalData.name,
        value: animalData.value,
      };
      fetchedAnimals.push(animal);
    });
    console.log(fetchedAnimals);
    currentRoundAnimals.value = fetchedAnimals;
    options.value = fetchedAnimals.map((item) => ({
      label: item.label,
      value: item.label.toString(),
    }));
  } catch (err) {}
};

const setPlayerRemain = async () => {
  try {
    const q = query(collection(roomRef, `players`));
    const snapshot = await getDocs(q);
    let updatePromises = snapshot.docs.map((docSnapshot) => {
      if (docSnapshot.data().myTurn === 0) {
        updateDoc(docSnapshot.ref, { remain: 1 });
      } else if (
        docSnapshot.data().myTurn === 1 &&
        docSnapshot.data().attacked > 0
      ) {
        updateDoc(docSnapshot.ref, { attacked: increment(-1) });
      }
    });

    await Promise.all(updatePromises);
  } catch (err) {}
};

const handleSubmit = async () => {
  let resultAnimal: SelectOption[] = null;
  if (animal.value === null || animal.value.length === 0) {
    message.warning("請選擇至少一隻動物");
  } else {
    const checkAnimals =
      typeof animal.value === "string" ? [animal.value] : animal.value;
    console.log(animal.value);
    // 留下有選中的動物
    resultAnimal = checkAnimals
      .map((label) =>
        currentRoundAnimals.value.find((item) => item.label === label)
      )
      .filter((item) => item !== undefined);

    for (let i = 0; i < 2; i++) {
      if (Number(resultAnimal[i].value) >= 0) {
        resultAnimal[i].value
          ? await increaseValueWithDB(roomId.value, "score", 1)
          : await increaseValueWithDB(roomId.value, "score", -1);
      } else {
        resultAnimal[i].value === -1
          ? await increaseValueWithDB(roomId.value, "score", 1)
          : await increaseValueWithDB(roomId.value, "score", -1);
      }
    }

    let strArray: string[] = [];
    strArray.push(`${resultAnimal[0].label}被掩蓋了`);
    strArray.push(
      `${resultAnimal[1].label}是${
        Number(resultAnimal[1].value) >= 0
          ? resultAnimal[1].value
            ? "真的"
            : "假的"
          : resultAnimal[1].value === -1
          ? "真的"
          : "假的"
      }`
    );
    result.value = strArray.join("\n");
    console.log(result.value);
    isAbleToCheck.value = false;
    roundOver.value = true;
  }
};

const handleNextRound = async () => {
  if (roundOver.value && currentRound.value === 3) {
    message.success("鑑寶環節結束");
    await setRTRoomValue(roomId.value, "currentRound", 1);
  } else if (roundOver.value) {
    await getRoundAnimal(currentRound.value + 1);
    await increaseValue(db, "rooms", "roomId", roomId.value, "currentRound", 1);
    await setRTRoomValue(roomId.value, "currentRound", 1);
    await setPlayerRemain();
    message.success(
      `下一回合的動物為 ${options.value[0].label}，${options.value[1].label}，${options.value[2].label}，${options.value[3].label}`,
      { closable: true, duration: 0 }
    );
  }
  showModal.value = false;
  animal.value = null;
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) {
      getRoundAnimal(currentRound.value);
      isAbleToCheck.value = true;
      roundOver.value = false;
    }
  }
);
</script>
