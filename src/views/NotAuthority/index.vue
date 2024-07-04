<template>
  <Result
    status="403"
    title="403"
    sub-title="您好，您没有权限访问此页面。请联系管理员。"
  >
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
