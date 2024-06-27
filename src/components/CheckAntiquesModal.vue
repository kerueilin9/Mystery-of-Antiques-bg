<template>
  <n-modal v-model:show="showModal" :mask-closable="true">
    <n-card
      style="width: 400px"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra> Oops! </template>
      Content
      <template #footer> Footer </template>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
// import { defineModel } from "vue";
const showModal = defineModel("showModal");
</script>
