<template>
  <n-modal
    v-model:show="showModal"
    :mask-closable="isHostAndInGame ? true : false"
  >
    <n-card
      style="width: 400px"
      title="選擇下一位玩家"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-select v-model:value="selectedPlayer" :options="options" />
      <template #footer>
        <n-button size="large" type="primary" @click="handleSubmit()"
          >確認</n-button
        >
      </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { db } from "@/firebaseConfig";
import {
  setDoc,
  doc,
  collection,
  getDocs,
  DocumentData,
  where,
  query,
  updateDoc,
} from "firebase/firestore";
import { SelectOption, useMessage } from "naive-ui";
import { useRoute, useRouter } from "vue-router";

const path = "/Mystery-of-Antiques-bg";
const message = useMessage();
const route = useRoute();
const router = useRouter();
const options = ref();
const selectedPlayer = ref("");

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const name = ref("");
name.value = String(route.query.player);

const host = computed(() => {
  if (route.query.host === "1") return true;
  return false;
});

const showModal = defineModel("showModal");
const hostName = defineModel("name");
const isHostAndInGame = computed(() => {
  if (host.value && route.fullPath.includes("room")) return false;
  return true;
});

interface Player {
  name: string;
  character: number;
  host: boolean | null;
  remain: number;
}

const getPlayers = async () => {
  try {
    const playersCollectionRef = collection(roomRef, "players");
    const querySnapshot = await getDocs(playersCollectionRef);
    const fetchedPlayers: SelectOption[] = [];
    querySnapshot.forEach((doc) => {
      const playerData = doc.data() as DocumentData;
      if (playerData.remain) {
        const player: SelectOption = {
          label: playerData.name,
          value: playerData.character,
        };
        fetchedPlayers.push(player);
      }
    });
    options.value = fetchedPlayers;
    console.log(options.value);
  } catch (err) {}
};

const removePlayer = async (character: string) => {
  const userCollectionRef = collection(roomRef, "players");
  let q = query(userCollectionRef, where("character", "==", character));
  let snapshot = await getDocs(q);

  let updatePromises = snapshot.docs.map((docSnapshot) =>
    updateDoc(docSnapshot.ref, { remain: 0 })
  );

  await Promise.all(updatePromises);
};

const setTurnPlayer = async (character: string) => {
  const userCollectionRef = collection(roomRef, "players");
  let q = query(userCollectionRef, where("character", "==", character));
  let snapshot = await getDocs(q);
  const updatePromises1 = snapshot.docs.map((docSnapshot) =>
    updateDoc(docSnapshot.ref, { myTurn: 1 })
  );
  await Promise.all(updatePromises1);

  if (isHostAndInGame.value) {
    q = query(userCollectionRef, where("name", "==", name.value));
    snapshot = await getDocs(q);
    const updatePromises2 = snapshot.docs.map((docSnapshot) =>
      updateDoc(docSnapshot.ref, { myTurn: 0 })
    );
    await Promise.all(updatePromises2);
  }
};

const handleSubmit = async () => {
  if (selectedPlayer.value.length === 0) message.warning("請選擇玩家");
  else if (!isHostAndInGame.value) {
    await removePlayer(selectedPlayer.value);
    await setTurnPlayer(selectedPlayer.value);
    router.push({
      path: `${path}/game/${roomId.value}`,
      query: { host: host.value ? 1 : 0, player: String(hostName.value) },
    });
  } else {
    await removePlayer(selectedPlayer.value);
    await setTurnPlayer(selectedPlayer.value);
  }
};

watch(
  () => showModal.value,
  (value) => {
    if (value === true) getPlayers();
  }
);
</script>
