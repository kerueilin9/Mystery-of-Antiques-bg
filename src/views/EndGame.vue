<template>
  <div class="w-10/12 max-w-sm mt-8 mx-auto text-center">
    <p class="text-3xl">房號：{{ roomId }}</p>
    <div class="text-9xl mt-28">{{ result }}</div>
    <div class="mt-16">
      <router-link to="/Mystery-of-Antiques-bg/">
        <n-button round class="text-6xl h-fit p-4" type="primary"
          >回到大廳</n-button
        >
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebaseConfig";
import {
  doc,
  query,
  collection,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { useMessage } from "naive-ui";

const path = "/Mystery-of-Antiques-bg";
const route = useRoute();
const router = useRouter();
const message = useMessage();

const roomId = ref();
roomId.value = route.params.roomId;
const roomRef = doc(db, "rooms", roomId.value);

const player = ref();
player.value = route.query.player;

const playerData = ref();
const result = ref("");

const badCharacters = ["LaoChaofeng", "MedicineIsNot", "ZhengGuoqu"];

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

const getFinalScore = async () => {
  try {
    const q = query(
      collection(db, "rooms"),
      where("roomId", "==", roomId.value)
    );
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    const data = docSnapshot.data() as DocumentData;
    if (
      (data.score >= 2 &&
        !badCharacters.includes(playerData.value.character)) ||
      (data.score <= 0 && badCharacters.includes(playerData.value.character))
    ) {
      result.value = "勝";
    } else {
      result.value = "敗";
    }
  } catch (err) {
    console.log(err);
  }
};

onMounted(async () => {
  playerData.value = await getPlayerData(String(player.value));
  await getFinalScore();
});
</script>
