<script setup>
import { ref } from "vue";
import Image1 from "../assets/image8.png";
const DATA = ref([
  {
    id: 1,
    name: "Vue",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui.",
    image: Image1,
  },
  {
    id: 2,
    name: "Vue",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui.",
    image: Image1,
  },
  {
    id: 3,
    name: "Vue",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui.",
    image: Image1,
  },
]);
</script>
<template>
  <section ref="3" class="container-section3">
    <div class="wrapper-div" v-for="item in DATA" :key="item.id">
      <div>
        {{ item.name }}
      </div>
      <div>
        {{ item.content }}
      </div>
      <div class="for-image10">
        <img width="100%" class="img9" :src="item.image" alt="img" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.container-section3 {
  display: grid;
  grid-template-columns: 1fr;
  max-width: 100%;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 60px;
  background-color: #f5f5f5;
}
.wrapper-div {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  place-items: center;
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
