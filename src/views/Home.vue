<template>
  <div class="mt-16">
    <p class="text-7xl font-style-MaShanZheng">古董局中局</p>
    <div class="flex flex-col h-80 justify-around mt-16">
      <CreateRoom />
      <JoinRoom />
    </div>
  </div>
</template>

<script setup lang="ts">
import CreateRoom from "@/components/CreateRoom.vue";
import JoinRoom from "@/components/JoinRoom.vue";
</script>
