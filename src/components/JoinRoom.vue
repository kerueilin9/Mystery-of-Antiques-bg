<template>
  <div class="flex flex-col items-center">
    <n-input
      size="large"
      class="max-w-56 block"
      v-model:value="roomId"
      placeholder="輸入房間ID"
    />
    <n-button
      class="text-8xl h-fit"
      type="info"
      @click="joinRoom"
      :loading="loading"
      >入房</n-button
    >
  </div>
  <ReJoinModal
    v-model:roomId="roomId"
    v-model:showModal="showModal"
  ></ReJoinModal>
</template>

<script setup lang="ts">
import { db } from "@/firebaseConfig";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ReJoinModal from "@/components/ReJoinModal.vue";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { NInput, NButton } from "naive-ui";

const router = useRouter();

const path = "/Mystery-of-Antiques-bg";

const roomId = ref();
const showModal = ref(false);
const loading = ref(false);

const joinRoom = async () => {
  if (roomId.value) {
    loading.value = true;
    const q = query(
      collection(db, "rooms"),
      where("roomId", "==", roomId.value)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const docSnapshot = querySnapshot.docs[0];
      const data = docSnapshot.data() as DocumentData;
      if (data.currentRound !== 0) {
        showModal.value = true;
        loading.value = false;
      } else router.push(`${path}/room/${roomId.value}`);
    } else {
      alert("房間不存在！");
    }
  } else {
    alert("請輸入房間號！");
  }
  loading.value = false;
};
</script>
