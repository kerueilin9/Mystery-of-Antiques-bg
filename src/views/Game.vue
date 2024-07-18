<template>
  <div class="w-10/12 max-w-sm mx-auto text-center font-style-MaShanZheng">
    <div class="h-1/6 py-7">
      <p class="text-3xl">房号：{{ roomId }}</p>
    </div>
    <div class="flex flex-col justify-around h-3/5">
      <n-button
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showTeammate()"
        >查看队友</n-button
      >
      <n-button
        class="text-4xl h-14"
        type="primary"
        size="large"
        @click="showCheckModal()"
        >鉴定古董</n-button
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
        @click="showSelectModal()"
        >选择下一位玩家</n-button
      >
      <n-button
        v-if="host"
        class="text-4xl h-14"
        type="warning"
        size="large"
        @click="showVoteModal()"
        >投票</n-button
      >
    </div>
    <div class="flex flex-col items-center h-1/5 py-6">
      <n-button
        @click="showRecordModal()"
        circle
        class="w-20 h-20"
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
    <VoteModal
      v-model:showModal="isVoteModal"
      v-model:currentRound="currentRound"
      v-model:playerData="playerData"
    />
    <RecordModal
      v-model:showModal="isRecordModal"
      v-model:currentRound="currentRound"
      v-model:playerData="playerData"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { CreateOutline } from "@vicons/ionicons5";
import { db, realtimeDB } from "@/firebaseConfig";
import {
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
import VoteModal from "@/components/VoteModal.vue";
import RecordModal from "@/components/RecordModal.vue";
import { useMessage } from "naive-ui";
import {
  ref as fireRef,
  orderByChild,
  equalTo,
  query as rtQuery,
  onValue,
} from "firebase/database";

const path = "/Mystery-of-Antiques-bg";
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
const isSelectModal = ref(false);
const isCheckModal = ref(false);
const isSkillModal = ref(false);
const isVoteModal = ref(false);
const isRecordModal = ref(false);
const playerData = ref();

const teammates = ["LaoChaofeng", "MedicineIsNot"];

const init = async (round: number) => {
  currentRound.value = round;
  if (round === 4) {
    router.push({
      path: `${path}/vote/${roomId.value}`,
      query: {
        ...route.query,
      },
    });
  }
};

const getRemainPlayerCount = async (): Promise<number> => {
  try {
    const playersCollectionRef = collection(roomRef, "players");
    const querySnapshot = await getDocs(playersCollectionRef);
    let remainPlayerCount = 0;
    querySnapshot.forEach((doc) => {
      const playerData = doc.data() as DocumentData;
      if (playerData.remain) {
        ++remainPlayerCount;
      }
    });
    console.log("剩餘玩家人數: " + remainPlayerCount);
    return remainPlayerCount;
  } catch (err) {
    return -1;
  }
};

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

const getPlayerDataByCharacter = async (character: string) => {
  try {
    const q = query(
      collection(roomRef, "players"),
      where("character", "==", character)
    );
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    const playerData = docSnapshot.data() as DocumentData;
    return playerData;
  } catch (err) {}
};

const showTeammate = async () => {
  const playerCharacter = await getPlayerData();
  if (!teammates.includes(playerCharacter.character)) {
    message.warning("你沒有隊友");
  } else if (playerCharacter.character === "LaoChaofeng") {
    const teammate = await getPlayerDataByCharacter("MedicineIsNot");
    message.success(`你的隊友是${teammate.name}`);
  } else if (playerCharacter.character === "MedicineIsNot") {
    const teammate = await getPlayerDataByCharacter("LaoChaofeng");
    message.success(`你的隊友是${teammate.name}`);
  }
};

const showCheckModal = async () => {
  playerData.value = await getPlayerData();
  if (playerData.value.character === "FangZhen")
    message.warning("你沒有鑑寶能力");
  else if (playerData.value.myTurn === 1) {
    isCheckModal.value = true;
  } else {
    message.warning("還沒有到你的回合");
  }
};

const showSkillModal = async () => {
  playerData.value = await getPlayerData();
  if (playerData.value.myTurn === 1) {
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

const showVoteModal = async () => {
  playerData.value = await getPlayerData();
  if ((await getRemainPlayerCount()) === 0) {
    isVoteModal.value = true;
  } else {
    message.warning("還有玩家未行動");
  }
};

const showRecordModal = async () => {
  playerData.value = await getPlayerData();
  isRecordModal.value = true;
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
        const roomKey = Object.keys(data)[0]; // 获取第一个结果的 key
        const currentRound = data[roomKey].currentRound || 0;
        console.log(currentRound);
        await init(currentRound);
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
</script>
