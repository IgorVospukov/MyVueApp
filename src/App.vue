<script setup>
import HeaderApp from "./components/HeaderApp.vue";
import Section1Home from "./components/Section1Home.vue";
import Section2AboutUs from "./components/Section2AboutUs.vue";
import Section3FrameWorks from "./components/Section3FrameWorks.vue";
import Section4Info from "./components/Section4Info.vue";
import Section5Applications from "./components/Section5Applications.vue";
import Section6ContactUs from "./components/Section6ContactUs.vue";
import FooterApp from "./components/FooterApp.vue";
</script>

<template>
  <div class="wrapper">
    <HeaderApp />
    <Section1Home />
    <Section2AboutUs />
    <Section3FrameWorks />
    <Section4Info />
    <Section5Applications />
    <Section6ContactUs />
    <FooterApp />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
}
</style>
