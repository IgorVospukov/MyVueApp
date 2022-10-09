<script setup>
import ButtonBlueApp from "./Button/ButtonBlueApp.vue";
</script>
<template>
  <section ref="4" class="container-section4">
    <div class="left-side">
      <img class="img14" src="../assets/image14.png" alt="img" />
      <div class="for-meeting">
        <h2 class="for-h2">Setup a Meeting</h2>
        <p class="discribe-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
          temporibus distinctio praesentium corporis cupiditate odio?
        </p>
        <ButtonBlueApp>Schedule a meeting</ButtonBlueApp>
      </div>
    </div>
    <div class="right-side">
      <img class="img12" src="../assets/image12.png" alt="img" />
      <div class="for-question">
        <h2 class="for-h2">Ask a question</h2>
        <p class="discribe-right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
          temporibus distinctio praesentium corporis cupiditate odio?
        </p>
        <ButtonBlueApp>Ask a question</ButtonBlueApp>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container-section4 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  padding-left: 120px;
  padding-right: 120px;
  place-items: center;
}
.for-h2 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
}
.left-side {
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}
.right-side {
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin-left: 10px;
}
.img12,
.img14 {
  width: 100%;
  height: 227px;
}
.for-meeting {
  padding-left: 10px;
}
.for-question {
  padding-left: 10px;
}
@media (min-width: 376px) and (max-width: 1700px) {
  .img12,
  .img14 {
    height: 100%;
  }
  .myclass3 {
    width: 200px;
    justify-self: center;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 15px;
  }
  .myclass4 {
    width: 200px;
    justify-self: center;
    margin-bottom: 15px;
  }
  .describe-left {
    font-size: 14px;
  }
  .describe-right {
    font-size: 14px;
  }
}
</style>
