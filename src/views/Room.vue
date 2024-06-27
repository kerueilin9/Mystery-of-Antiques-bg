<!-- src/views/Room.vue -->
<template>
  <div class="w-10/12 max-w-sm mt-8 mx-auto text-center">
    <p class="text-3xl">房號：{{ roomId }}</p>
    <n-card title="玩家資料" class="mt-8">
      <n-form
        class="text-center"
        ref="basicFormRef"
        require-mark-placement="left"
        :rules="basicRules"
        :model="basicForm"
      >
        <n-form-item path="name" label="玩家暱稱">
          <n-input
            class="w-full"
            :show-button="false"
            v-model:value="basicForm.name"
            placeholder="請填參與玩家都知道的暱稱"
          />
        </n-form-item>
        <n-form-item path="character" label="角色">
          <n-select
            class="w-full"
            v-model:value="basicForm.character"
            :options="characterOptions"
            placeholder="選取抽到的角色"
          />
        </n-form-item>
      </n-form>
    </n-card>
    <section class="flex gap-2 flex-wrap mt-2 justify-center">
      <router-link to="/" class="underline">
        <n-button size="large">返回</n-button>
      </router-link>

      <n-button size="large" type="primary" @click="handleSubmit()">{{
        start
      }}</n-button>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import {
  FormRules,
  NInput,
  NSelect,
  NCard,
  NForm,
  NFormItem,
  NButton,
} from "naive-ui";
import { db } from "@/firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

const route = useRoute();

const characterOptions = [
  { label: "老朝奉", value: "HuangYanyan" },
  { label: "藥不然", value: "KidoKana" },
  { label: "鄭國渠", value: "JiYunfu" },
  { label: "許願", value: "FangZhen" },
  { label: "方震", value: "MakeAWish" },
  { label: "姬雲浮", value: "ZhengGuoqu" },
  { label: "木戶加奈", value: "MedicineIsNot" },
  { label: "黃煙煙", value: "LaoChaofeng" },
];

const initialBasicForm = {
  name: null,
  character: null,
};
const basicForm = ref<{
  name: string | null;
  character: string | null;
}>({ ...initialBasicForm });

const basicRules: FormRules = {
  name: {
    required: true,
    trigger: ["blur", "input", "change"],
    type: "string",
    validator: (rule, value: string) => {
      if (value === null || value === undefined || value === "") {
        return Promise.reject("必填");
      }
      return Promise.resolve();
    },
  },
  character: {
    required: true,
    trigger: ["blur", "input", "change"],
    type: "string",
    validator: (rule, value: string) => {
      if (value === null || value === undefined || value === "") {
        return Promise.reject("必填");
      }
      return Promise.resolve();
    },
  },
};

const host = computed(() => {
  if ((route.query.host as string) === "1") return true;
  return false;
});

const start = computed(() => {
  return host.value ? "開始遊戲" : "加入遊戲";
});

const handleSubmit = async () => {
  try {
    const roomRef = doc(db, "rooms", roomId.value);
    await setDoc(doc(roomRef, "players", "host"), {});
  } catch (err) {}
};

const roomId = ref();
roomId.value = route.params.roomId;
</script>
