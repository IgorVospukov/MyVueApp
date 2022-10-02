<script setup>
// const menuEl2 = document.querySelector("#2")
// const menuEl3 = document.querySelector("#3");
// const menuEl4 = document.querySelector("#4");
let scroll = (refName) => {
  refName.scrollIntoView();
};
</script>
<template>
  <div class="container">
    <img class="my-logo" src="../assets/logo.png" alt="my-logo" />
    <div class="nav">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="scroll(test1)">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="scroll">FRAMEWORKS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="scroll">APPLICATIONS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="scroll">CONTACT US</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  max-width: 100%;
  height: 80px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  color: #ffffff;
  padding: 0;
  align-content: center;
}
.my-logo {
  grid-column: 1/2;
  width: 197px;
  height: 36px;
  align-self: center;
  margin-left: 122px;
}
.nav {
  grid-column: 2/3;
  justify-self: flex-end;
  align-self: center;
  margin-right: 20px;
}
</style>
