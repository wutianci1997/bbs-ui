<template>
  <Button
    type="primary"
    :loading="globalStore.loading"
    @click="handleButtonOnClick"
    >登录</Button
  >
</template>
<script setup lang="ts">
import { Button } from "ant-design-vue";
import { useGlobalStore } from "@/stores/global";
const globalStore = useGlobalStore();
const handleButtonOnClick = () => {
  globalStore.changeLoading(true);
};
</script>
