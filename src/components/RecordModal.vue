<template>
  <n-modal v-model:show="showModal" :mask-closable="true">
    <n-card
      header-style="font-size: 32px"
      class="max-w-90 w-96 font-style-Bakudai"
      title="紀錄"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-tabs
        default-value="firstRound"
        size="large"
        justify-content="space-evenly"
        type="segment"
        animated
      >
        <n-tab-pane name="firstRound" :tab="renderTab('第一回合', '20px')">
          <n-divider dashed class="text-3xl"> 本回合古董 </n-divider>
          <div class="flex justify-around">
            <div class="text-2xl" v-for="animal in roundAnimals[1]">
              {{ animal.name }}
            </div>
          </div>
          <div v-if="records.round1.length != 0">
            <n-divider dashed class="text-3xl"> 歷史行動 </n-divider>
            <div v-for="context in records.round1" class="text-2xl">
              {{ context }}
            </div>
          </div>
        </n-tab-pane>
        <n-tab-pane name="secondRound" :tab="renderTab('第二回合', '20px')">
          <n-divider dashed class="text-3xl"> 本回合古董 </n-divider>
          <div class="flex justify-around">
            <div class="text-2xl" v-for="animal in roundAnimals[2]">
              {{ animal.name }}
            </div>
          </div>
          <div v-if="records.round2 != 0">
            <n-divider dashed class="text-3xl"> 歷史行動 </n-divider>
            <div v-for="context in records.round2" class="text-2xl">
              {{ context }}
            </div>
          </div>
        </n-tab-pane>
        <n-tab-pane name="thirdRound" :tab="renderTab('第三回合', '20px')">
          <n-divider dashed class="text-3xl"> 本回合古董 </n-divider>
          <div class="flex justify-around">
            <div class="text-2xl" v-for="animal in roundAnimals[3]">
              {{ animal.name }}
            </div>
          </div>
          <div v-if="records.round3 != 0">
            <n-divider dashed class="text-3xl"> 歷史行動 </n-divider>
            <div v-for="context in records.round3" class="text-2xl">
              {{ context }}
            </div>
          </div>
        </n-tab-pane>
      </n-tabs>

      <template #footer>
        <div class="flex justify-end mt-8">
          <div>
            <n-button size="large" @click="showModal = false"> 返回 </n-button>
          </div>
        </div>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { h, ref, watch } from "vue";
import { db } from "@/firebaseConfig";
import { doc, collection, getDocs, DocumentData } from "firebase/firestore";
import { SelectOption } from "naive-ui";
import { useRoute } from "vue-router";
import { Player } from "@/types";
const route = useRoute();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const showModal = defineModel("showModal");
const currentRound = defineModel<number>("currentRound");
const playerData = defineModel<Player>("playerData");
const isAbleToCheck = ref(true);
const roundOver = ref(false);

const roundAnimals = ref([]);

const records = ref();

const renderTab = (label: string, fontSize: string) => {
  return h("span", { style: { fontSize } }, label);
};

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
        name: animalData.name,
        value: animalData.value,
      };
      fetchedAnimals.push(animal);
    });
    console.log(fetchedAnimals);
    return fetchedAnimals;
  } catch (err) {}
};

const getAllAnimals = async (currentRound: number) => {
  for (let i = 1; i <= currentRound; i++) {
    roundAnimals.value[i] = await getRoundAnimal(i);
  }
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) {
      getAllAnimals(currentRound.value);
      records.value = playerData.value.record;
      isAbleToCheck.value = true;
      roundOver.value = false;
    }
  }
);
</script>
