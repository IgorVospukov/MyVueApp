<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
  placeholder: String,
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
  <div class="for-input1">
    <p>First Name*</p>
    <input
      v-if="type === 'text'"
      :type="type"
      v-model="review.fitText1"
      :placeholder="placeholder"
    />
    <input v-else />
  </div>
</template>
<style scoped></style>
