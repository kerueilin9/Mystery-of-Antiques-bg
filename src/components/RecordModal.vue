<template>
  <n-modal v-model:show="showModal" :mask-closable="true">
    <n-card
      style="width: 400px"
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
        <n-tab-pane name="firstRound" tab="第一回合">
          <div class="flex justify-around">
            <div class="text-2xl" v-for="animal in roundAnimals[1]">
              {{ animal.name }}
            </div>
          </div>
          <n-form>
            <n-form-item-row label="Username">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="Password">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong> Sign In </n-button>
        </n-tab-pane>
        <n-tab-pane name="secondRound" tab="第二回合">
          <div class="flex justify-around">
            <div class="text-2xl" v-for="animal in roundAnimals[2]">
              {{ animal.name }}
            </div>
          </div>
          <n-form>
            <n-form-item-row label="Username">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="Password">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="Reenter Password">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong> Sign up </n-button>
        </n-tab-pane>
        <n-tab-pane name="thirdRound" tab="第三回合">
          <div class="flex justify-around">
            <div class="text-2xl" v-for="animal in roundAnimals[3]">
              {{ animal.name }}
            </div>
          </div>
          <n-form>
            <n-form-item-row label="Username">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="Password">
              <n-input />
            </n-form-item-row>
            <n-form-item-row label="Reenter Password">
              <n-input />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong> Sign up </n-button>
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
import { increaseValue, setValue } from "@/hooks/setFirebaseData";
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

const roundAnimals = ref([]);

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
      isAbleToCheck.value = true;
      roundOver.value = false;
    }
  }
);
</script>
