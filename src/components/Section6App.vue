<script setup>
import { ref } from "vue";
import ReviewForm from "./Form/ReviewForm.vue";
import Button1App from "./Buttons/Button1App.vue";
//import Button1App1 from "./Buttons/Button1App.vue";

let flag = ref(false);
const showModal = () => {
  flag.value = true;
  setTimeout(() => (flag.value = !flag.value), 3000);
};
</script>
<template>
  <section id="contact" class="container-section6">
    <h1 class="for-contacts">Contact Us</h1>
    <ReviewForm />
    <div class="button-left">
      <button
        type="button"
        class="btn btn-primary btn-lg myclass"
        id="show-modal"
        @click="showModal"
      >
        Submit
      </button>
    </div>
    <div class="my-mod" v-show="flag">
      <p class="text-modal">Form is sent !</p>
    </div>
    <Button1App>Abbbk</Button1App>
  </section>
</template>
<style scoped>
.container-section6 {
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 60px;
}
.button-left {
  align-self: center;
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
