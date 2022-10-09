<script setup>
import { ref } from "vue";
import ReviewForm from "./Form/ReviewForm.vue";
import ButtonBlueApp from "./Button/ButtonBlueApp.vue";

let flag = ref(false);
const showModal = () => {
  flag.value = true;
  setTimeout(() => (flag.value = !flag.value), 3000);
};
</script>
<template>
  <section id="contact" class="container-section6">
    <h1 class="for-contacts">Contact Us</h1>
    <ReviewForm class="container-form" />
    <div class="button-center">
      <ButtonBlueApp @click="showModal">Submit</ButtonBlueApp>
    </div>
    <div class="my-mod" v-show="flag">
      <p class="text-modal">Form is sent !</p>
    </div>
  </section>
</template>
<style scoped>
.container-section6 {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 115px 1fr 120px;
  padding-left: 120px;
  padding-right: 120px;
  background-color: #ffffff;
}
.for-contacts {
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
  align-self: center;
  margin: 0;
}
.button-center {
  margin-top: 20px;
  align-self: flex-start;
  justify-self: center;
}
.myclass {
  width: 200px;
}
.my-mod {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 100px;
  border: 2px solid rgb(47, 175, 255);
  border-radius: 10px;
  background-color: whitesmoke;
}
.container-form {
  grid-column: 1/2;
  grid-row: 2/3;
}
.text-modal {
  margin: 0;
  color: rgb(47, 175, 255);
}
</style>
