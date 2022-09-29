<script setup>
import HeaderApp from "./components/HeaderApp.vue";
</script>

<template>
  <div class="wrapper">
    <HeaderApp />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: auto;
}
</style>
