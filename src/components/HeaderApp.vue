<script setup></script>
<template>
  <div class="container">
    <img class="my-logo" src="../assets/logo.png" alt="my-logo" />
    <div class="nav">
      <ul class="nav justify-content-end myclass">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#" v-scroll-to="'#home'"
            >HOME
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#about'">ABOUT US</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#frameworks'"
            >FRAMEWORKS</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#applications'"
            >APPLICATIONS</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" v-scroll-to="'#contact'">CONTACT US</a>
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
  align-content: center;
  padding: 0;
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
}
.myclass {
  margin-right: 80px;
}
@media (min-width: 376px) and (max-width: 1700px) {
  .nav {
    justify-self: center;
  }
}
</style>
