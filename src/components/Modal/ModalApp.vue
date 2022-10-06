<script setup></script>

<template>
  <div class="my-mod" v-show="flag">
    <p class="text-modal">Form is sent !</p>
  </div>
</template>

<style scoped>
.my-mod {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  left: 50%;
  top: 10%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100px;
  border: 2px solid rgba(35, 247, 16, 0.764);
  border-radius: 10px;
  opacity: 0.5;
}
.text-modal {
  margin: 0;
  color: rgba(35, 247, 16, 0.964);
}
</style>
