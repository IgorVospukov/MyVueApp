<script setup></script>
<template>
  <div class="container">
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="#">HOME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FRAMEWORKS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">APPLICATIONS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT US</a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
}
.nav justify-content-end {
  grid-column: 2/3;
}
</style>
