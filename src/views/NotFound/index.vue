<template>
  <Result status="404" title="404" sub-title="您好，您要访问的页面不存在。">
    <template #extra>
      <Button type="primary" @click="router.back">返回</Button>
    </template>
  </Result>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { Result, Button } from "ant-design-vue";
const router = useRouter();
</script>
