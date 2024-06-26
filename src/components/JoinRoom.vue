<template>
  <div>
    <h2>加入房间</h2>
    <input v-model="roomId" placeholder="输入房间ID" />
    <button @click="joinRoom">入房</button>
  </div>
</template>

<script setup lang="ts">
import { db } from "@/firebaseConfig";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { collection, query, where, getDocs } from "firebase/firestore";

const router = useRouter();

const data = ref("");
const roomId = ref();
const joinRoom = async () => {
  if (roomId.value) {
    const q = query(
      collection(db, "roomId"),
      where("roomId", "==", roomId.value)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      router.push(`/room/${roomId.value}`);
    } else {
      alert("房间号不存在！");
    }
  } else {
    alert("请输入房间号！");
  }
};
</script>
