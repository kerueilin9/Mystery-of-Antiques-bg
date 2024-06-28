<template>
  <div class="w-10/12 max-w-sm mt-8 mx-auto text-center">
    <p class="text-3xl">房號：{{ roomId }}</p>
    <div class="flex flex-col h-96 justify-around">
      <n-button class="text-4xl h-14" type="primary" size="large" @click=""
        >查看隊友</n-button
      >
      <n-button
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showModal = true"
        >鑑定古董</n-button
      >
      <n-button class="text-4xl h-14" type="primary" size="large" @click=""
        >使用技能</n-button
      >
      <n-button
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showSelectModal = true"
        >選擇下一位玩家</n-button
      >
      <n-button
        v-if="host"
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showSelectModal = true"
        >投票</n-button
      >
    </div>
    <CheckAntiquesModal v-model:showModal="showModal" />
    <SelectModal v-model:showModal="showSelectModal" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebaseConfig";
import {
  setDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import CheckAntiquesModal from "@/components/CheckAntiquesModal.vue";
import SelectModal from "@/components/SelectModal.vue";

const route = useRoute();
const router = useRouter();

const roomId = ref();
roomId.value = route.params.roomId;

const player = ref();
player.value = route.query.player;

const roomRef = doc(db, "rooms", roomId.value);
const turn = ref(1);
const showModal = ref(false);
const showSelectModal = ref(false);
const host = computed(() => {
  if (route.query.host === "1") return true;
  return false;
});

interface Animal {
  name: string;
  value: number;
  view_value: number;
}

const animals = ref<Animal[]>();

const getAnimals = async () => {
  try {
    const animalsCollectionRef = collection(roomRef, "animals");
    const querySnapshot = await getDocs(animalsCollectionRef);
    const fetchedAnimals: Animal[] = [];
    querySnapshot.forEach((doc) => {
      const animalData = doc.data() as DocumentData;
      const animal: Animal = {
        name: animalData.animal,
        value: animalData.value,
        view_value: animalData.view_value,
      };
      fetchedAnimals.push(animal);
    });
    console.log(fetchedAnimals);
    animals.value = fetchedAnimals;
  } catch (err) {}
};

const setFourRandomAnimals = async () => {
  for (let i = 1; i <= 3; i++) {
    try {
      const value1Animals = animals.value.filter(
        (animal) => animal.value === 1
      );
      const value0Animals = animals.value.filter(
        (animal) => animal.value === 0
      );

      const selectedValue1 = getRandomElements(value1Animals, 2);
      const selectedValue0 = getRandomElements(value0Animals, 2);

      const fourRandomAnimals: Animal[] = shuffle([
        ...selectedValue1,
        ...selectedValue0,
      ]);
      for (const animal of fourRandomAnimals) {
        await setDoc(
          doc(roomRef, `ReadomAnimalForRound${i}`, String(turn.value++)),
          animal
        );
      }
      console.log(fourRandomAnimals);
      animals.value = animals.value.filter(
        (item) =>
          !fourRandomAnimals.some((toRemove) => toRemove.name === item.name)
      );
    } catch (err) {}
  }
};

const getRandomElements = (array, count) => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

onMounted(async () => {
  if (route.query.host === "1") {
    await getAnimals();
    setFourRandomAnimals();
  }
});
</script>
