<script setup>
import { ref } from "vue";
import ReviewForm from "./Form/ReviewForm.vue";
import ModalApp from "./Modal/ModalApp.vue";

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
    <ModalApp />
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
</style>
