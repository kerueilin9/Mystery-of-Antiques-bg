<template>
  <div class="flex flex-col items-center">
    <n-input class="max-w-56 block" v-model="roomId" placeholder="輸入房間ID" />
    <n-button class="text-8xl h-fit" type="info" @click="joinRoom"
      >入房</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { db } from "@/firebaseConfig";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NInput, NButton } from "naive-ui";

const router = useRouter();

const data = ref("");
const roomId = ref();
const joinRoom = async () => {
  if (roomId.value) {
    const q = query(
      collection(db, "rooms"),
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
