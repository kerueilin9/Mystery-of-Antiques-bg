<template>
  <div>
    <h2>創建房間</h2>
    <button @click="createRoom">開房</button>
  </div>
</template>

<script setup lang="ts">
import { db } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "vue-router";

const router = useRouter();

const generateRoomId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const createRoom = async () => {
  const roomId = generateRoomId();
  try {
    await addDoc(collection(db, "roomId"), {
      roomId: roomId,
      createdAt: new Date(),
    });
    alert(`房間已創建！房號：${roomId}`);
    router.push(`/room/${roomId}`);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
</script>
