<template>
  <div>
    <p class="text-5xl mt-8">古董局中局 - 大廳</p>
    <div class="flex flex-col h-96 justify-around">
      <CreateRoom />
      <JoinRoom />
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateRoom from "@/components/CreateRoom.vue";
import JoinRoom from "@/components/JoinRoom.vue";
</script>
