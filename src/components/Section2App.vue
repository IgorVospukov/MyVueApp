<script setup></script>
<template>
  <section ref="2" class="container-section2">
    <div class="wrapper-left">
      <div class="for-text">
        <h2 class="about-us">About us</h2>
        <p class="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          tenetur reiciendis recusandae debitis enim deleniti unde doloremque
          voluptatem in tempore similique consequuntur ipsa est, numquam quod
          provident. Perferendis voluptatibus placeat ratione aperiam repellat
          obcaecati harum sit, velit quis eos? Quam, molestias tempora, ex
          suscipit explicabo maiores mollitia autem dicta error repellendus
        </p>
      </div>
      <div class="for-buttons">
        <span class="button-left">
          <button type="button" class="btn btn-primary btn-lg myclass">
            Read More
          </button>
        </span>
        <span class="button-right">
          <button type="button" class="btn btn-secondary btn-lg myclass2">
            Contact Us
          </button>
        </span>
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
  height: 300px;
}
.container-section2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 100px;
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
}
.for-text {
  grid-column: 1/2;
  grid-row: 1/2;
  width: 80%;
}
.for-buttons {
  grid-column: 1/2;
  grid-row: 2/3;
}
.button-left {
  padding-right: 10px;
}
.myclass {
  width: 200px;
}
.myclass2 {
  width: 200px;
  background-color: #ffffff;
  color: #3d3d3d;
}
</style>
