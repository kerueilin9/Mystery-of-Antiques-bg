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
      <n-radio-group
        v-if="character !== 'MakeAWish'"
        v-model:value="animal"
        name="radiogroup"
      >
        <n-space>
          <n-radio
            v-for="animal in animals"
            :key="animal.name"
            :value="animal.name"
            :label="animal.name"
          />
        </n-space>
      </n-radio-group>
      <n-checkbox-group v-else :max="2" @update:value="handleUpdateValue">
        <n-grid :y-gap="8" :cols="2">
          <n-gi v-for="(animal, index) in animals" :key="index">
            <n-checkbox :value="animal.name" :label="animal.name" />
          </n-gi>
        </n-grid>
      </n-checkbox-group>
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
const character = defineModel<string>("character");
const animals = ref<Animal[]>();
const animal = ref<string | (string | number)[]>(null);
const result = ref("");
const isAbleToCheck = ref(true);

interface Animal {
  name: string;
  value: number;
  view_value: number;
}

const character1 = ["JiYunfu", "MedicineIsNot", "ZhengGuoqu", "LaoChaofeng"];

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
  let resultAnimal: Animal[] = null;
  if (
    animal.value.length !== 0 &&
    animal.value !== null &&
    isAbleToCheck.value
  ) {
    const checkAnimals =
      typeof animal.value === "string" ? [animal.value] : animal.value;

    // 留下有選中的動物
    resultAnimal = animals.value.filter((item) => {
      return checkAnimals.some((remain) => remain === item.name);
    });

    let strArray: string[] = [];
    if (character1.includes(character.value)) {
      resultAnimal.forEach((animal) => {
        strArray.push(
          `${animal.name}是${
            animal.value >= 0 ? (animal.value ? "真的" : "假的") : "什麼鬼"
          }`
        );
      });
    } else {
      resultAnimal.forEach((animal) => {
        strArray.push(
          `${animal.name}是${
            animal.view_value >= 0
              ? animal.view_value
                ? "真的"
                : "假的"
              : "什麼鬼"
          }`
        );
      });
    }

    result.value = strArray.join("\n");
    console.log(result.value);
    isAbleToCheck.value = false;
  } else {
    message.warning("無法查看");
  }
};

const handleUpdateValue = (value: (string | number)[]) => {
  animal.value = value;
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) getCurrentRoundAnimal();
  }
);
</script>
