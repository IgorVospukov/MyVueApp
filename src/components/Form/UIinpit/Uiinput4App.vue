<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "email",
    validator: (value) => {
      return ["email"].includes(value);
    },
  },
});
const value = ref(props.modelValue);
watch(value, () => {
  emits("update:modelValue", value);
});
</script>
<template>
  <div class="for-input4">
    <p class="name">First Name*</p>
    <input
      v-if="type === 'email'"
      :type="type"
      placeholder="Enter Your First Name"
    />
    <input v-else class="warn" />
  </div>
</template>
<style scoped>
.name {
  margin: 0;
}
.for-input4 {
  width: 278px;
  height: 40px;
}
</style>
