<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "text",
    validator: (value) => {
      return ["text"].includes(value);
    },
  },
});
const value = ref(props.modelValue);
watch(value, () => {
  emits("update:modelValue", value);
});
</script>
<template>
  <div class="for-input3">
    <p class="company">Company*</p>
    <input
      v-if="type === 'text'"
      :type="type"
      placeholder="Enter Your Company"
    />
    <input v-else />
  </div>
</template>
<style scoped>
.company {
  margin: 0;
}
.for-input3 {
  width: 278px;
  height: 40px;
}
</style>
