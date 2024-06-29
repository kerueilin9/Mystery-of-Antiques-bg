<template>
  <n-modal v-model:show="showModal" :mask-closable="closable ? true : false">
    <n-card
      style="width: 400px"
      title="使用技能"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <div v-if="character === 'LaoChaofeng'">
        <n-checkbox v-model:checked="LaoChaofengSkill">
          之後玩家看到的真假互換(同陣營和姬雲浮不適用)
        </n-checkbox>
      </div>
      <div v-else-if="character === 'ZhengGuoqu'">
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
      <!-- <n-select v-model:value="selectedPlayer" :options="options" /> -->
      <template #footer>
        <n-button
          size="large"
          type="primary"
          :loading="isLoading"
          @click="handleSubmit()"
          >確認</n-button
        >
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
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
import { SelectOption, useMessage } from "naive-ui";
import { useRoute, useRouter } from "vue-router";

const path = "/Mystery-of-Antiques-bg";
const message = useMessage();
const route = useRoute();
const router = useRouter();
const options = ref();
const selectedPlayer = ref("");

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const name = ref("");
name.value = String(route.query.player);

const host = computed(() => {
  if (route.query.host === "1") return true;
  return false;
});

const closable = computed(() => {
  if (host.value && route.fullPath.includes("room")) return false;
  return true;
});
const showModal = defineModel("showModal");
const currentRound = defineModel<number>("currentRound");
const character = defineModel<string>("character");
const LaoChaofengSkill = ref(false);
const MedicineIsNotSkill = ref(null);
const ZhengGuoquSkill = ref("");
const animals = ref<Animal[]>();
const coveredAnimal = ref("");
const isLoading = ref(false);

interface Animal {
  name: string;
  value: number;
  view_value: number;
}

interface Player {
  name: string;
  character: number;
  host: boolean | null;
  remain: number;
}

const getPlayers = async () => {
  try {
    const playersCollectionRef = collection(roomRef, "players");
    const querySnapshot = await getDocs(playersCollectionRef);
    const fetchedPlayers: SelectOption[] = [];
    querySnapshot.forEach((doc) => {
      const playerData = doc.data() as DocumentData;
      const player: SelectOption = {
        label: playerData.name,
        value: playerData.character,
      };
      fetchedPlayers.push(player);
    });
    options.value = fetchedPlayers;
    console.log(options.value);
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
        // console.log(`Document ${docId} updated: view_value set to ${newValue}`);
      }
    } else {
      console.warn("無對應資料");
    }
  } catch (error) {
    console.error("老嘲諷技能問題: ", error);
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
  } catch (err) {}
};

const handleSubmit = async () => {
  switch (character.value) {
    case "LaoChaofeng":
      isLoading.value = true;
      await changeTrueFalse(LaoChaofengSkill.value);
      showModal.value = false;
      isLoading.value = false;
      break;
    case "MedicineIsNot":
      isLoading.value = true;
      await setCoveredAnimal(coveredAnimal.value);
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
      await changeTrueFalse(LaoChaofengSkill.value);
      showModal.value = false;
      isLoading.value = false;
      break;
  }
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) getPlayers();
    if (character.value === "ZhengGuoqu") getCurrentRoundAnimal();
  }
);
</script>
