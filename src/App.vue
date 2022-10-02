<script setup>
import HeaderApp from "./components/HeaderApp.vue";
import Section1App from "./components/Section1App.vue";
import Section2App from "./components/Section2App.vue";
import Section3FrameWorks from "./components/Section3FrameWorks.vue";
import Section4App from "./components/Section4App.vue";
import Section5Applications from "./components/Section5Applications.vue";
import Section6App from "./components/Section6App.vue";
</script>

<template>
  <div class="wrapper">
    <HeaderApp />
    <Section1App />
    <Section2App />
    <Section3FrameWorks />
    <Section4App />
    <Section5Applications />
    <Section6App />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  width: 100%;
}
</style>
