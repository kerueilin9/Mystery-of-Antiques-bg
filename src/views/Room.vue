<!-- src/views/Room.vue -->
<template>
  <div>
    <h2>房间号：{{ roomId }}</h2>
    <!-- 其他房间内的逻辑 -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const roomId = ref();
roomId.value = route.params.roomId;
</script>
