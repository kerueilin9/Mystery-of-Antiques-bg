<template>
  <div>
    <p class="text-3xl">古董局中局 - 大廳</p>
    <div class="flex flex-col h-80 justify-around">
      <CreateRoom />
      <JoinRoom />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { defineComponent } from "vue";
import CreateRoom from "@/components/CreateRoom.vue";
import JoinRoom from "@/components/JoinRoom.vue";
import Test from "@/components/test.vue";
</script>
