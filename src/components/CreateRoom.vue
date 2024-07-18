<template>
  <div>
    <n-button
      round
      class="text-7xl h-fit py-3 px-10 font-style-Bakudai text-stone-300"
      type="primary"
      :loading="isLoading"
      @click="createRoom"
      >開房</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { db } from "@/firebaseConfig";
import { setRTRoomValue, setRTValue } from "@/hooks/setFirebaseData";
import { setDoc, doc } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const generateRoomId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const path = "/Mystery-of-Antiques-bg";

const isLoading = ref(false);

interface AnimalValue {
  animal: string;
  value: number;
  view_value: number;
}

function getRandomAnimals(): AnimalValue[] {
  const animals = [
    "鼠",
    "牛",
    "虎",
    "兔",
    "龍",
    "蛇",
    "馬",
    "羊",
    "猴",
    "雞",
    "狗",
    "豬",
  ];

  // 動物初始化
  const animalValues: AnimalValue[] = animals.map((animal) => ({
    animal: animal,
    value: 0,
    view_value: 0,
  }));

  // 隨機選六隻動物為真
  let selectedCount = 0;
  while (selectedCount < 6) {
    const randomIndex = Math.floor(Math.random() * animals.length);
    if (animalValues[randomIndex].value === 0) {
      animalValues[randomIndex].value = 1;
      animalValues[randomIndex].view_value = 1;
      selectedCount++;
    }
  }

  return animalValues;
}

const createRoom = async () => {
  const roomId = generateRoomId();

  try {
    isLoading.value = true;
    await setDoc(doc(db, "rooms", roomId), {
      roomId: roomId,
      currentRound: 0,
      score: 0,
      voteLaoChaofeng: 0,
      createdAt: new Date(),
    });
    await setRTValue("/rooms", { roomId: roomId });
    await setRTRoomValue(roomId, "playerCount", 1);
    const randomAnimals = getRandomAnimals();
    const roomRef = doc(db, "rooms", roomId);
    for (const animal of randomAnimals) {
      await setDoc(doc(roomRef, "animals", animal.animal), animal);
    }
    alert(`房間已創建！房號：${roomId}`);
    router.push({ path: `${path}/room/${roomId}`, query: { host: "1" } });
  } catch (e) {
    isLoading.value = false;
    console.error("Error adding document: ", e);
  }
};
</script>
