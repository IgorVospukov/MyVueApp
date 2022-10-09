<script setup>
import ButtonWhiteApp from "./Button/ButtonWhiteApp.vue";
import ButtonBlueApp from "./Button/ButtonBlueApp.vue";
</script>
<template>
  <section id="about" class="container-section2">
    <div class="wrapper-left">
      <div class="for-text">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          tenetur reiciendis recusandae debitis enim deleniti unde doloremque
          voluptatem in tempore similique consequuntur ipsa est, numquam quod
          provident. Perferendis voluptatibus placeat ratione aperiam repellat
          obcaecati harum sit, velit quis eos? Quam, molestias tempora, ex
          suscipit explicabo maiores mollitia autem dicta error repellendus
        </p>
      </div>
      <div class="for-buttons">
        <ButtonBlueApp>Read More</ButtonBlueApp>
        <ButtonWhiteApp>Contact Us</ButtonWhiteApp>
      </div>
    </div>
    <div class="wrapper-right">
      <img class="img9" src="../assets/image9.png" alt="vid" />
    </div>
  </section>
</template>

<style scoped>
.img9 {
  width: 100%;
  max-height: 300px;
}
.container-section2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 100px;
  margin-bottom: 120px;
}
.wrapper-left {
  grid-column: 1/2;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  place-items: flex-start;
}
.wrapper-right {
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-content: center;
}
.for-text {
  grid-column: 1/2;
  grid-row: 1/2;
  width: 80%;
}
.for-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column: 1/2;
  grid-row: 2/3;
  column-gap: 10px;
}
</style>
