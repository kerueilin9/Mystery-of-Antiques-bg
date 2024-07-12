<template>
  <div class="w-10/12 max-w-sm mt-8 mx-auto text-center">
    <p class="text-3xl">房號：{{ roomId }}</p>
    <n-card
      title="前三輪投票結果"
      class="flex flex-col justify-around h-2/5 mt-8"
    >
    </n-card>
    <n-card
      title="鑑人投票"
      class="flex flex-col justify-around mt-8"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-select v-model:value="votedPlayer" :options="allPlayers" />
      <template #footer>
        <n-button
          :loading="isLoading"
          :disabled="!isSubmitAble"
          size="large"
          type="primary"
          @click="handleSubmit()"
          >確認</n-button
        >
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db, realtimeDB } from "@/firebaseConfig";
import {
  doc,
  query,
  collection,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { SelectOption, useMessage } from "naive-ui";
import {
  ref as fireRef,
  orderByChild,
  equalTo,
  query as rtQuery,
  onValue,
} from "firebase/database";
import { increaseValueWithDB, setRTRoomValue } from "@/hooks/setFirebaseData";

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

const isLoading = ref(false);
const allPlayers = ref();
const currentRound = ref(4);
const votedPlayer = ref("");
const isSubmitAble = ref(true);

const turn = ref(1);
const playerData = ref();
const character = ref("");

const teammates = ["LaoChaofeng", "MedicineIsNot"];

const init = async (round: number) => {
  currentRound.value = round;
  if (round === 5) {
    router.push({
      path: `${path}/game/${roomId.value}`,
      ...route.query,
    });
  }
};

const getPlayers = async () => {
  try {
    const playersCollectionRef = collection(roomRef, "players");
    const querySnapshot = await getDocs(playersCollectionRef);
    const fetchedPlayers: SelectOption[] = [];
    querySnapshot.forEach((doc) => {
      const playerData = doc.data() as DocumentData;
      const player: SelectOption = {
        label: playerData.name,
        value: playerData.character,
      };
      fetchedPlayers.push(player);
    });
    allPlayers.value = fetchedPlayers;
  } catch (err) {}
};

const getPlayerData = async (name: string) => {
  try {
    const q = query(collection(roomRef, "players"), where("name", "==", name));
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    const playerData = docSnapshot.data() as DocumentData;
    return playerData;
  } catch (err) {
    console.log(err);
  }
};

const LaoChaofengVote = async () => {
  try {
    if (votedPlayer.value === "MakeAWish") {
      await increaseValueWithDB(roomId.value, "score", -2);
    } else {
      await increaseValueWithDB(roomId.value, "score", 2);
    }
  } catch (err) {
    console.log("老朝奉鑑人問題：" + err);
  }
};

const MedicineIsNotVote = async () => {
  try {
    if (votedPlayer.value === "FangZhen") {
      await increaseValueWithDB(roomId.value, "score", -1);
    } else {
      await increaseValueWithDB(roomId.value, "score", 1);
    }
  } catch (err) {
    console.log("藥不然鑑人問題：" + err);
  }
};

const goodPlayerVote = async () => {
  try {
    if (votedPlayer.value === "LaoChaofeng") {
      await increaseValueWithDB(roomId.value, "voteLaoChaofeng", 1);
    }
  } catch (err) {
    console.log("好人鑑人問題：" + err);
  }
};

const handleSubmit = async () => {
  if (votedPlayer.value === "") message.warning("請選擇玩家");
  else {
    isSubmitAble.value = false;
    switch (playerData.value.character) {
      case "LaoChaofeng":
        await LaoChaofengVote();
        break;
      case "MedicineIsNot":
        await MedicineIsNotVote();
        break;
      case "ZhengGuoqu":
        break;
      default:
        await goodPlayerVote();
        break;
    }
    await setRTRoomValue(roomId.value, "votedPlayerCount", 1);
  }
};

const listenedValueChange = async () => {
  const q = query(collection(db, "rooms"), where("roomId", "==", roomId.value));
  const querySnapshot = await getDocs(q);
  const docSnapshot = querySnapshot.docs[0];
  const roomData = docSnapshot.data() as DocumentData;
  if (roomData.voteLaoChaofeng >= 3 && host.value) {
    await increaseValueWithDB(roomId.value, "score", 1);
  } else if (host.value) {
    await increaseValueWithDB(roomId.value, "score", -1);
  }
  router.push({
    path: `${path}/endGame/${roomId.value}`,
    query: {
      ...route.query,
    },
  });
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
        const roomKey = Object.keys(data)[0];
        const playerCount = data[roomKey].playerCount || 0;
        const votedPlayerCount = data[roomKey].votedPlayerCount || 0;
        if (playerCount === votedPlayerCount) await listenedValueChange();
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
  await getPlayers();
  playerData.value = await getPlayerData(String(player.value));
});
</script>
