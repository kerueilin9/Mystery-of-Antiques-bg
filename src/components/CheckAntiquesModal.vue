<template>
  <n-modal v-model:show="showModal" :mask-closable="true">
    <n-card
      style="width: 400px"
      title="鑑定古董"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-radio-group v-model:value="animal" name="radiogroup">
        <n-space>
          <n-radio
            v-for="animal in animals"
            :key="animal.name"
            :value="animal.name"
            :label="animal.name"
          />
        </n-space>
      </n-radio-group>
      <template #footer>
        <div class="flex justify-end">
          <n-button size="large" type="primary" @click="handleSubmit()"
            >確認</n-button
          >
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
} from "firebase/firestore";
import { SelectOption, resultDark, useMessage } from "naive-ui";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const message = useMessage();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const showModal = defineModel("showModal");
const currentRound = defineModel("currentRound");
const animals = ref<Animal[]>();
const animal = ref("");
const result = ref("");
const isAbleToCheck = ref(true);

interface Animal {
  name: string;
  value: number;
  view_value: number;
}

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

const handleSubmit = async () => {
  let resultAnimal: Animal = null;
  if (animal.value.length !== 0 && isAbleToCheck.value) {
    resultAnimal = animals.value.find((item) => {
      return item.name == animal.value;
    });
    result.value = `${resultAnimal.name} 是 ${
      resultAnimal.view_value ? "真的" : "假的"
    }`;
    isAbleToCheck.value = false;
  } else {
    message.warning("無法查看");
  }
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) getCurrentRoundAnimal();
  }
);
</script>
