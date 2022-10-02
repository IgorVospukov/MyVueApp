<script setup></script>
<template>
  <section ref="4" class="container-section4">
    <div class="left-side">
      <img class="img14" src="../assets/image14.png" alt="img" />
      <div class="for-meeting">
        <h2 class="for-h2">Setup a Meeting</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
          temporibus distinctio praesentium corporis cupiditate odio?
        </p>
        <button type="button" class="btn btn-primary btn-lg myclass3">
          Schedule a meeting
        </button>
      </div>
    </div>
    <div class="right-side">
      <img class="img12" src="../assets/image12.png" alt="img" />
      <div class="for-question">
        <h2 class="for-h2">Ask a question</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
          temporibus distinctio praesentium corporis cupiditate odio?
        </p>
        <button type="button" class="btn btn-primary btn-lg myclass4">
          Ask a question
        </button>
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
.myclass3 {
  width: 200px;
  justify-self: center;
  padding-left: 0;
  padding-right: 0;
}
.myclass4 {
  width: 200px;
  justify-self: center;
}
</style>
