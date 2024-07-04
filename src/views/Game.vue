<template>
  <div class="w-10/12 max-w-sm mt-8 mx-auto text-center">
    <p class="text-3xl">房號：{{ roomId }}</p>
    <div class="flex flex-col h-auto justify-around">
      <n-button class="text-4xl h-14 mt-8" type="primary" size="large" @click=""
        >查看隊友</n-button
      >
      <n-button
        class="text-4xl h-14 mt-8"
        type="primary"
        size="large"
        @click="showCheckModal()"
        >鑑定古董</n-button
      >
      <n-button
        class="text-4xl h-14 mt-8"
        type="primary"
        size="large"
        @click="showSkillModal()"
        >使用技能</n-button
      >
      <n-button
        class="text-4xl h-14 mt-8"
        type="primary"
        size="large"
        @click="showSelectModal()"
        >選擇下一位玩家</n-button
      >
      <n-button class="text-4xl h-14 mt-8" type="warning" size="large" @click=""
        >投票</n-button
      >
    </div>
    <div class="flex flex-col items-center">
      <n-button
        @click=""
        circle
        class="w-20 h-20 absolute bottom-20"
        dashed
        type="info"
      >
        <template #icon>
          <n-icon class="text-6xl"><CreateOutline /></n-icon> </template
      ></n-button>
    </div>
    <CheckAntiquesModal
      v-model:showModal="isCheckModal"
      v-model:currentRound="currentRound"
      v-model:playerData="playerData"
    />
    <SkillModal
      v-model:showModal="isSkillModal"
      v-model:currentRound="currentRound"
      v-model:playerData="playerData"
    />
    <SelectModal
      v-model:showModal="isSelectModal"
      v-model:playerData="playerData"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { CreateOutline } from "@vicons/ionicons5";
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
import SkillModal from "@/components/SkillModal.vue";
import { useMessage } from "naive-ui";

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
const isSelectModal = ref(false);
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
  if (playerData.value.character === "FangZhen")
    message.warning("你沒有鑑寶能力");
  else if (playerData.value.myTurn === 1) {
    currentRound.value = await getCurrentRound();
    isCheckModal.value = true;
  } else {
    message.warning("還沒有到你的回合");
  }
};

const showSkillModal = async () => {
  playerData.value = await getPlayerData();
  if (playerData.value.myTurn === 1) {
    character.value = playerData.value.character;
    currentRound.value = await getCurrentRound();
    isSkillModal.value = true;
  } else {
    message.warning("還沒有到你的回合");
  }
};

const showSelectModal = async () => {
  playerData.value = await getPlayerData();
  if (playerData.value.myTurn === 1) {
    isSelectModal.value = true;
  } else {
    message.warning("還沒有到你的回合");
  }
};

onMounted(async () => {});
</script>
