<template>
  <div class="w-10/12 max-w-sm mt-8 mx-auto text-center">
    <p class="text-3xl">房號：{{ roomId }}</p>
    <div class="flex flex-col h-96 justify-around">
      <n-button class="text-4xl h-14" type="primary" size="large" @click=""
        >查看隊友</n-button
      >
      <n-button
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showCheckModal()"
        >鑑定古董</n-button
      >
      <n-button
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showSkillModal()"
        >使用技能</n-button
      >
      <n-button
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showSelectModal = true"
        >選擇下一位玩家</n-button
      >
      <n-button
        v-if="host"
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showSelectModal = true"
        >投票</n-button
      >
    </div>
    <CheckAntiquesModal
      v-model:showModal="isCheckModal"
      v-model:currentRound="currentRound"
      v-model:character="character"
    />
    <SelectModal v-model:showModal="showSelectModal" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebaseConfig";
import {
  setDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import CheckAntiquesModal from "@/components/CheckAntiquesModal.vue";
import SelectModal from "@/components/SelectModal.vue";
import { useMessage } from "naive-ui";
import { RefSymbol } from "@vue/reactivity";

const route = useRoute();
const router = useRouter();
const message = useMessage();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const player = ref();
player.value = route.query.player;

const host = computed(() => {
  if (route.query.host === "1") return true;
  return false;
});

const currentRound = ref(0);
const turn = ref(1);
const showSelectModal = ref(false);
const isCheckModal = ref(false);
const isSkillModal = ref(false);
const playerData = ref();
const character = ref("");

const getPlayerData = async () => {
  try {
    const q = query(
      collection(roomRef, "players"),
      where("name", "==", player.value)
    );
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    const playerData = docSnapshot.data() as DocumentData;
    return playerData;
  } catch (err) {}
};

const getCurrentRound = async () => {
  try {
    const q = query(
      collection(db, "rooms"),
      where("roomId", "==", roomId.value)
    );
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    const roomData = docSnapshot.data() as DocumentData;
    return roomData.currentRound;
  } catch (err) {}
};

const showCheckModal = async () => {
  playerData.value = await getPlayerData();
  if (playerData.value.myTurn === 1) {
    character.value = playerData.value.character;
    console.log(character.value);
    currentRound.value = await getCurrentRound();
    isCheckModal.value = true;
  } else {
    message.warning("還沒有到你的回合");
  }
};

const showSkillModal = async () => {
  playerData.value = await getPlayerData();
  if (playerData.value.myTurn === 1) {
    currentRound.value = await getCurrentRound();
    isSkillModal.value = true;
  } else {
    message.warning("還沒有到你的回合");
  }
};

onMounted(async () => {});
</script>
