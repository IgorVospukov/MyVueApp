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
  <div class="for-input8">
    <p class="name">First Name*</p>
    <input
      v-if="type === 'text'"
      :type="type"
      placeholder="1"
    />
    <input v-else class="warn" />
  </div>
</template>
<style scoped>
.name {
  margin: 0;
}
.for-input8 {
  width: 278px;
  height: 40px;
}
</style>
