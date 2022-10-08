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
const checkValid = ref(true);

watch(value, () => {
  emits("update:modelValue", value);
});
const emailHandler = (e) => {
  const re =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if (!re.test(String(e.target.value).toLowerCase())) {
    checkValid.value = false;
    value.value = "error";
  } else {
    checkValid.value = true;
    value.value = e.target.value;
  }
};
</script>
<template>
  <div class="for-input">
    <p class="name">Email*</p>
    <input
      :class="[checkValid ? 'single-input' : 'warn']"
      :type="type"
      placeholder="Enter Your Email"
      @change="emailHandler"
    />
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
  border: 2px outset red;
  padding-left: 5px;
}
</style>
