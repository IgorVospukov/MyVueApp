<script setup>
import { ref } from "vue";
import Image21 from "../assets/image21.png";
import Image20 from "../assets/image20.png";
import Image19 from "../assets/image19.png";
import Image18 from "../assets/image18.png";
import Image17 from "../assets/image17.png";
import Image16 from "../assets/image16.png";
import Image15 from "../assets/image15.png";
import Image6 from "../assets/image6.png";
const DATA2 = ref([
  {
    id: 1,
    name: "App1",
    image: Image21,
  },
  {
    id: 2,
    name: "App2",
    image: Image20,
  },
  {
    id: 3,
    name: "App3",
    image: Image19,
  },
  {
    id: 4,
    name: "App4",
    image: Image18,
  },
  {
    id: 5,
    name: "App5",
    image: Image17,
  },
  {
    id: 6,
    name: "App6",
    image: Image16,
  },
  {
    id: 7,
    name: "App7",
    image: Image15,
  },
  {
    id: 8,
    name: "App8",
    image: Image6,
  },
]);
</script>
<template>
  <section id="applications" class="container-section5">
    <h1 class="for-app">Applications</h1>
    <div class="wrapper-div">
      <figure class="for-image" v-for="item in DATA2" :key="item.id">
        <img width="100%" class="img" :src="item.image" alt="img" />
        <figcaption class="discription">
          <span class="discription-img">{{ item.name }}</span>
        </figcaption>
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
  /* margin-bottom: 80px; */
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
.wrapper-div {
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-template-rows: auto;
  column-gap: 96px;
  row-gap: 20px;
  margin-bottom: 40px;
}
.img {
  width: 100%;
  height: auto;
}
.for-image {
  display: grid;
  place-items: center;
  width: 100%;
}
.discription {
  grid-row: 2/3;
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: grey;
  text-align: center;
  display: grid;
  place-items: center;
}
.discription-img {
  color: white;
}
</style>
