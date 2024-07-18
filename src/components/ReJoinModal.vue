<template>
  <n-modal v-model:show="showModal">
    <n-card
      class="max-w-90 w-96"
      title="重新入房"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-select v-model:value="selectedPlayer" :options="options" />
      <template #footer>
        <n-button
          :loading="isLoading"
          size="large"
          type="primary"
          @click="handleSubmit()"
          >確認</n-button
        >
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { db } from "@/firebaseConfig";
import { doc, collection, getDocs, DocumentData } from "firebase/firestore";
import { SelectOption, useMessage } from "naive-ui";
import { useRouter } from "vue-router";

const path = "/Mystery-of-Antiques-bg";
const message = useMessage();
const router = useRouter();
const options = ref();
const selectedPlayer = ref("");
const isLoading = ref(false);

const showModal = defineModel("showModal");
const roomId = defineModel<string>("roomId");
const roomRef = ref();

const getPlayers = async () => {
  try {
    const playersCollectionRef = collection(roomRef.value, "players");
    const querySnapshot = await getDocs(playersCollectionRef);
    const fetchedPlayers: SelectOption[] = [];
    querySnapshot.forEach((doc) => {
      const playerData = doc.data() as DocumentData;
      const player: SelectOption = {
        label: playerData.name,
        value: playerData.name,
      };
      fetchedPlayers.push(player);
    });
    options.value = fetchedPlayers;
    console.log(options.value);
  } catch (err) {}
};

const handleSubmit = async () => {
  if (selectedPlayer.value === null || selectedPlayer.value.trim() === "")
    message.warning("請選擇玩家");
  else {
    isLoading.value = true;
    router.push({
      path: `${path}/game/${roomId.value}`,
      query: { host: 0, player: String(selectedPlayer.value) },
    });
    showModal.value = false;
    isLoading.value = false;
  }
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) {
      roomRef.value = doc(db, "rooms", roomId.value);
      selectedPlayer.value = null;
      getPlayers();
    }
  }
);
</script>
