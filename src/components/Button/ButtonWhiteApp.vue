<script setup></script>
<template>
  <button type="button" class="main-button">
    <slot></slot>
  </button>
</template>
<style scoped>
.main-button {
  width: 200px;
  height: 40px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  border: 1px solid #71a3ff;
  border-radius: 10px;
  font-weight: 400px;
  line-height: 20px;
}
button:hover {
  background-color: rgb(6, 86, 207);
  color: #ffffff;
}
</style>
