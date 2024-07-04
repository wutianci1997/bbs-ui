<template>
  <Spin :spinning="globalStore.spinning" wrapper-class-name="global-sipn">
    <RouterView />
  </Spin>
</template>
<script setup lang="ts">
import { Spin } from "ant-design-vue";
import { useGlobalStore } from "./stores/global";
const globalStore = useGlobalStore();
</script>
<style scoped lang="less">
.global-sipn {
  height: 100%;
}
</style>
