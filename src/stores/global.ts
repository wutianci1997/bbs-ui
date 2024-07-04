import { defineStore } from "pinia";
import { ref } from "vue";

export const useGlobalStore = defineStore("global", () => {
  const spinning = ref<boolean>(false); // 全局spinning
  const loading = ref<boolean>(false); // 全局loading
  // 修改loading
  const changeLoading = (value: boolean) => {
    loading.value = value;
  };
  // 修改loading
  const changeSpinning = (value: boolean) => {
    spinning.value = value;
  };
  return {
    loading,
    changeLoading,
    spinning,
    changeSpinning,
  };
});
