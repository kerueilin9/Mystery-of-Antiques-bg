<template>
  <div>
    <n-button class="text-8xl h-fit" type="primary" @click="createRoom"
      >開房</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { db } from "@/firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { NButton } from "naive-ui";

const router = useRouter();

const generateRoomId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const path = "/Mystery-of-Antiques-bg";

interface AnimalValue {
  animal: string;
  value: number;
  view_value: number;
}

function getRandomAnimals(): AnimalValue[] {
  // 定义12只动物（12生肖）
  const animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];

  // 初始化所有动物的值为0
  const animalValues: AnimalValue[] = animals.map((animal) => ({
    animal: animal,
    value: 0,
    view_value: 0,
  }));

  // 从动物数组中随机选取6只动物，将它们的值设置为1
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
    await setDoc(doc(db, "rooms", roomId), {
      roomId: roomId,
      createdAt: new Date(),
    });
    const randomAnimals = getRandomAnimals();
    const roomRef = doc(db, "rooms", roomId);
    for (const animal of randomAnimals) {
      await setDoc(doc(roomRef, "animals", animal.animal), animal);
    }
    alert(`房間已創建！房號：${roomId}`);
    router.push({ path: `${path}/room/${roomId}`, query: { host: "1" } });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>
