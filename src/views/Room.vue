<template>
  <div class="w-10/12 max-w-sm text-center font-style-MaShanZheng">
    <div class="h-1/5 py-7">
      <p class="text-3xl">房号：{{ roomId }}</p>
    </div>
    <div>
      <n-card header-style="font-size: 32px" title="玩家资料">
        <n-form
          class="text-center"
          ref="basicFormRef"
          require-mark-placement="left"
          :rules="basicRules"
          :model="basicForm"
        >
          <n-form-item
            path="name"
            label="玩家昵称"
            label-style="font-size: 24px"
          >
            <n-input
              size="large"
              class="w-full text-2xl font-style-Bakudai"
              :show-button="false"
              v-model:value="basicForm.name"
              placeholder="請填入昵称"
            />
          </n-form-item>
          <n-form-item
            path="character"
            label="角色"
            label-style="font-size: 24px"
          >
            <n-select
              size="large"
              class="w-full custom-select-font-size font-style-Bakudai"
              v-model:value="basicForm.character"
              :options="characterOptions"
              placeholder="选取抽到的角色"
            />
          </n-form-item>
        </n-form>
      </n-card>
      <section class="flex gap-2 flex-wrap mt-2 justify-center">
        <router-link to="/Mystery-of-Antiques-bg/">
          <n-button secondary class="text-2xl" size="large">返回</n-button>
        </router-link>
        <n-button
          :loading="submitLoading"
          class="text-2xl"
          size="large"
          type="primary"
          @click="handleSubmit()"
          >{{ start }}</n-button
        >
      </section>
      <div class="text-2xl mt-16">房内人数：{{ playerCount }}</div>
    </div>

    <SelectModal v-model:showModal="showSelectModal" :name="basicForm.name" />
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { httpsCallable } from "firebase/functions";
import { useRoute, useRouter } from "vue-router";
import { FormInst, FormRules, useMessage } from "naive-ui";
import { increaseValue, setRTRoomValue } from "@/hooks/setFirebaseData";
import { db, functions, realtimeDB } from "@/firebaseConfig";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import {
  ref as fireRef,
  orderByChild,
  equalTo,
  query as rtQuery,
  onValue,
} from "firebase/database";
import SelectModal from "@/components/SelectModal.vue";

const route = useRoute();
const router = useRouter();
const message = useMessage();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const path = "/Mystery-of-Antiques-bg";

const showSelectModal = ref(false);
const animals = ref<Animal[]>();
const turn = ref(1);
const gameStart = ref(0);
const playerCount = ref(0);
const basicFormRef = ref<FormInst | null>(null);
const submitLoading = ref(false);

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
  return host.value ? "开始游戏" : "加入游戏";
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
      if (i === 1)
        message.success(
          `第一回合的動物為 ${fourRandomAnimals[0].name}，${fourRandomAnimals[1].name}，${fourRandomAnimals[2].name}，${fourRandomAnimals[3].name}`,
          { closable: true, duration: 0 }
        );
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

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 3) + 1;
};

const handleSubmit = async () => {
  try {
    await basicFormRef.value.validate();
    submitLoading.value = true;
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
      record: {
        round1: [],
        round2: [],
        round3: [],
      },
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
      await setRTRoomValue(roomId.value, "currentRound", 1);
      await getAnimals();
      await setFourRandomAnimals();
      gameStart.value = 1;
      showSelectModal.value = true;
      submitLoading.value = false;
    } else {
      await setDoc(doc(roomRef, "players", basicForm.value.name), playerInfo);
      await setRTRoomValue(roomId.value, "playerCount", 1);
      submitLoading.value = false;
      router.push({
        path: `${path}/game/${roomId.value}`,
        query: { host: host.value ? 1 : 0, player: basicForm.value.name },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const listenRound = async (roomId: string) => {
  try {
    const roomsRef = fireRef(realtimeDB, "rooms");
    const roomQuery = rtQuery(
      roomsRef,
      orderByChild("roomId"),
      equalTo(roomId)
    );

    onValue(roomQuery, async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const roomKey = Object.keys(data)[0];
        playerCount.value = data[roomKey].playerCount || 0;
      } else {
        console.log("roomId not found");
      }
    });
  } catch (error) {
    console.error("Error querying roomId", error);
  }
};

onMounted(async () => {
  await listenRound(roomId.value);
});

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
