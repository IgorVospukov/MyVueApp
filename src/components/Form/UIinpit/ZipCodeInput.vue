<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "number",
    validator: (value) => {
      return ["number"].includes(value);
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
    <p class="name">Zip code*</p>
    <input
      class="single-input"
      v-if="type === 'number'"
      :type="type"
      placeholder="Enter Your Zip code"
    />
    <input v-else class="warn" />
  </div>
</template>
<style scoped>
.name {
  margin-bottom: 5px;
}
.single-input {
  width: 278px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #c4c4c4;
  padding-left: 5px;
}
.warn {
  width: 278px;
  height: 40px;
  border-radius: 10px;
  border: red;
  padding-left: 5px;
}
</style>
