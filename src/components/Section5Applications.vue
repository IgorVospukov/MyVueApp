<script setup>
import { ref } from "vue";
import Image15 from "../assets/image15.png";
const DATA2 = ref([
  {
    id: 1,
    name: "Vue",
    image: Image15,
  },
  {
    id: 2,
    name: "Vue",
    image: Image15,
  },
  {
    id: 3,
    name: "Vue",
    image: Image15,
  },
  {
    id: 4,
    name: "Vue",
    image: Image15,
  },
  {
    id: 5,
    name: "Vue",
    image: Image15,
  },
  {
    id: 6,
    name: "Vue",
    image: Image15,
  },
  {
    id: 7,
    name: "Vue",
    image: Image15,
  },
  {
    id: 8,
    name: "Vue",
    image: Image15,
  },
]);
</script>
<template>
  <section id="applications" class="container-section5">
    <h1 class="for-app">Applications</h1>
    <div class="wrapper-div5">
      <figure class="for-image10" v-for="item in DATA2" :key="item.id">
        <img width="100%" class="img9" :src="item.image" alt="img" />
        <figcaption>{{ item.name }}</figcaption>
      </figure>
    </div>
  </section>
</template>
<style scoped>
.container-section5 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  max-width: 100%;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 80px;
  background-color: #f5f5f5;
}
.for-app {
  display: inline-block;
  grid-column: 1/2;
  grid-row: 1/2;
  text-align: center;
  justify-self: center;
  align-self: center;
}
.wrapper-div5 {
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(227px, auto));
  grid-template-rows: auto;
  column-gap: 96px;
  row-gap: 30px;
  /* place-items: center; */
}
.img9 {
  width: 100%;
  height: auto;
}
.for-image10 {
  width: 300px;
  height: 200px;
  border: 1px solid red;
}
</style>
