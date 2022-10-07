<script setup>
import { ref } from "vue";
import Image11 from "../assets/image11.png";
import Image10 from "../assets/image10.png";
import Image7 from "../assets/image7.png";
const DATA = ref([
  {
    id: 1,
    name: "Vue",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui.",
    image: Image11,
  },
  {
    id: 2,
    name: "React Js",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui.",
    image: Image10,
  },
  {
    id: 3,
    name: "Angular",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur non voluptas architecto libero eum molestiae in debitis aliquid praesentium asperiores, quos, ex qui.",
    image: Image7,
  },
]);
</script>
<template>
  <section id="frameworks" class="container-section3">
    <h1 class="frameworks">Frameworks</h1>
    <div class="wrapper-div" v-for="item in DATA" :key="item.id">
      <div class="for-image">
        <img class="img" :src="item.image" alt="img" />
      </div>
      <div class="wrap-content">
        <div class="name">
          {{ item.name }}
        </div>
        <p class="content">
          {{ item.content }}
        </p>
        <div class="wrapper-buttons">
          <div class="button-left">
            <button type="button" class="btn btn-primary btn-lg myclass1">
              Read More
            </button>
          </div>
          <div class="button-right">
            <button type="button" class="btn btn-secondary btn-lg myclass2">
              Webinar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.container-section3 {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 125px 1fr;
  padding-left: 120px;
  padding-right: 120px;
  margin-bottom: 60px;
  background-color: #f5f5f5;
  place-items: center;
}
.frameworks {
  grid-column: 1/2;
  grid-row: 1/2;
  justify-self: center;
}
.wrapper-div {
  grid-column: 1/2;
  display: grid;
  grid-template-columns: min-max(1fr, 1fr);
  grid-template-rows: auto;
  margin-top: 45px;
  margin-bottom: 45px;
}
.wrap-content {
  grid-column: 2/3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px repeat(2, 1fr);
  margin-left: 100px;
}
.img {
  grid-column: 1/2;
  width: 100%;
  max-height: 351px;
}
.for-image {
  width: 100%;
}
.name {
  font-size: 24px;
  font-weight: 700;
}
.wrapper-buttons {
  grid-row: 3/4;
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 1fr;
  column-gap: 20px;
}
.button-left {
  grid-column: 1/2;
  align-self: flex-end;
  display: inline-block;
}
.button-right {
  grid-column: 2/3;
  align-self: flex-end;
}
.myclass1 {
  width: 200px;
}
.myclass2 {
  width: 200px;
  width: 200px;
  background-color: #ffffff;
  color: #3d3d3d;
  border-color: grey;
}
.content {
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}
@media (min-width: 376px) and (max-width: 1700px) {
  .button-left {
    align-self: flex-start;
  }
  .button-right {
    align-self: flex-start;
  }
  .wrap-content {
    grid-template-rows: 50px repeat(2, 1fr);
    margin-left: 100px;
  }
}
</style>
