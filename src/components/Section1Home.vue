<script setup></script>
<template>
  <section id="home" class="container-section1">
    <div class="img8" width="100%">
      <div class="wrap-text">
        <p class="wel">Welcom to Taste Page</p>
        <p class="front">Front-end Developer</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-section1 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-items: center;
}
.img8 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-items: center;
  background-image: url("../assets/image8.png");
  background-size: cover;
  width: 100%;
  height: 823px;
}
.wrap-text {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
}
.wel {
  grid-column: 1/2;
  grid-row: 1/2;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 70px;
  line-height: 87px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  text-align: center;
}
.front {
  grid-column: 1/2;
  grid-row: 2/3;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  line-height: 45px;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  text-align: center;
}
</style>
