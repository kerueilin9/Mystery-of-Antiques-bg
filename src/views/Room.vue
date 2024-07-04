<template>
  <div class="w-10/12 max-w-sm mt-28 mx-auto text-center">
    <p class="text-3xl">房號：{{ roomId }}</p>
    <n-card header-style="font-size: 32px" title="玩家資料" class="mt-8">
      <n-form
        class="text-center"
        ref="basicFormRef"
        require-mark-placement="left"
        :rules="basicRules"
        :model="basicForm"
      >
        <n-form-item path="name" label="玩家暱稱" label-style="font-size: 24px">
          <n-input
            size="large"
            class="w-full text-xl"
            :show-button="false"
            v-model:value="basicForm.name"
            placeholder="請填參與玩家都知道的暱稱"
          />
        </n-form-item>
        <n-form-item
          path="character"
          label="角色"
          label-style="font-size: 24px"
        >
          <n-select
            size="large"
            class="w-full custom-select-font-size"
            v-model:value="basicForm.character"
            :options="characterOptions"
            placeholder="選取抽到的角色"
          />
        </n-form-item>
      </n-form>
    </n-card>
    <section class="flex gap-2 flex-wrap mt-2 justify-center">
      <router-link to="/Mystery-of-Antiques-bg/">
        <n-button class="text-2xl" size="large">返回</n-button>
      </router-link>
      <n-button
        class="text-2xl"
        size="large"
        type="primary"
        @click="handleSubmit()"
        >{{ start }}</n-button
      >
    </section>
    <SelectModal v-model:showModal="showSelectModal" :name="basicForm.name" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { httpsCallable } from "firebase/functions";
import { useRoute, useRouter } from "vue-router";
import { FormRules } from "naive-ui";
import { increaseValue } from "@/hooks/setFirebaseData";
import { db, functions } from "@/firebaseConfig";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  writeBatch,
  query,
  where,
  updateDoc,
  increment,
  DocumentData,
  deleteDoc,
} from "firebase/firestore";
import SelectModal from "@/components/SelectModal.vue";
import { largerSize } from "naive-ui/es/_utils";

const route = useRoute();
const router = useRouter();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const path = "/Mystery-of-Antiques-bg";

const showSelectModal = ref(false);
const animals = ref<Animal[]>();
const turn = ref(1);
const gameStart = ref(0);

const characterOptions = [
  { label: "老朝奉", value: "LaoChaofeng" },
  { label: "藥不然", value: "MedicineIsNot" },
  { label: "鄭國渠", value: "ZhengGuoqu" },
  { label: "許願", value: "MakeAWish" },
  { label: "方震", value: "FangZhen" },
  { label: "姬雲浮", value: "JiYunfu" },
  { label: "木戶加奈", value: "KidoKana" },
  { label: "黃煙煙", value: "HuangYanyan" },
];

const excludedCharacters = ["KidoKana", "HuangYanyan"];

const initialBasicForm = {
  name: null,
  character: null,
};
const basicForm = ref<{
  name: string | null;
  character: string | null;
}>({ ...initialBasicForm });

const basicRules: FormRules = {
  name: {
    required: true,
    trigger: ["blur", "input", "change"],
    type: "string",
    validator: (rule, value: string) => {
      if (value === null || value === undefined || value === "") {
        return Promise.reject("必填");
      }
      return Promise.resolve();
    },
  },
  character: {
    required: true,
    trigger: ["blur", "input", "change"],
    type: "string",
    validator: (rule, value: string) => {
      if (value === null || value === undefined || value === "") {
        return Promise.reject("必填");
      }
      return Promise.resolve();
    },
  },
};

const host = computed(() => {
  if ((route.query.host as string) === "1") return true;
  return false;
});
const hostValue = host.value;

const start = computed(() => {
  return host.value ? "開始遊戲" : "加入遊戲";
});

interface Animal {
  name: string;
  value: number;
  view_value: number;
}

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

const addCurrentRound = async () => {
  const roomsRef = collection(roomRef, "rooms");
  let q = query(roomsRef, where("roomId", "==", roomId.value));
  let snapshot = await getDocs(q);

  let updatePromises = snapshot.docs.map((docSnapshot) =>
    updateDoc(docSnapshot.ref, { currentRound: increment(1) })
  );

  await Promise.all(updatePromises);
};

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 3) + 1;
};

const handleSubmit = async () => {
  try {
    const roomRef = doc(db, "rooms", roomId.value);
    const playerInfo = {
      name: basicForm.value.name,
      character: basicForm.value.character,
      host: host.value,
      remain: 1,
      myTurn: 0,
      attacked: 0,
      isCheckAble: 1,
      isSkillAble: 1,
      inActiveRound: excludedCharacters.includes(basicForm.value.character)
        ? getRandomNumber()
        : 0,
    };
    if (host.value) {
      await setDoc(doc(roomRef, "players", basicForm.value.name), playerInfo);
      await increaseValue(
        db,
        "rooms",
        "roomId",
        roomId.value,
        "currentRound",
        1
      );
      await getAnimals();
      await setFourRandomAnimals();
      gameStart.value = 1;
      showSelectModal.value = true;
    } else {
      await setDoc(doc(roomRef, "players", basicForm.value.name), playerInfo);
      router.push({
        path: `${path}/game/${roomId.value}`,
        query: { host: host.value ? 1 : 0, player: basicForm.value.name },
      });
    }
  } catch (err) {}
};

onBeforeUnmount(async () => {
  try {
    if (roomId.value && hostValue && !gameStart.value) {
      const deleteRoomWithSubcollections = httpsCallable(
        functions,
        "deleteRoomWithSubcollections"
      );
      await deleteRoomWithSubcollections({ roomId: roomId.value });
      console.log(`房間 ${roomId.value} 已成功刪除。`);
    }
  } catch (error) {
    console.error("Error deleting room: ", error);
  }
});
</script>
