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
  background-color: #71a3ff;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-weight: 400px;
  line-height: 20px;
}
button:hover {
  background-color: rgb(6, 86, 207);
  color: #ffffff;
}
</style>
