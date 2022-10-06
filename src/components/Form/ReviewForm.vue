<script setup>
import { reactive } from "vue";
import Uiinput1App from "./UIinpit/Uiinput1App.vue";
import Uiinput2App from "./UIinpit/Uiinput2App.vue";
import Uiinput3App from "./UIinpit/Uiinput3App.vue";
import Uiinput4App from "./UIinpit/Uiinput4App.vue";
import Uiinput5App from "./UIinpit/Uiinput5App.vue";
import Uiinput6App from "./UIinpit/Uiinput6App.vue";
import Uiinput7App from "./UIinpit/Uiinput7App.vue";
import Uiinput8App from "./UIinpit/Uiinput8App.vue";
const review = reactive({
  fitText1: "",
  fitText2: "",
  fitText3: "",
  fitText4: "",
  fitText5: "",
  fitText6: "",
  fitText7: "",
  fitText8: "",
});
</script>
<template>
  <form @submit.prevent.stop="submit" class="for-form">
    <div class="for-inputs1-4">
      <Uiinput1App v-model="review.fitText1" type="text" />
      <Uiinput2App v-model="review.fitText2" type="text" />
      <Uiinput3App v-model="review.fitText3" type="text" />
      <Uiinput4App v-model="review.fitText4" type="email" />
    </div>
    <div class="for-inputs5-8">
      <Uiinput5App v-model="review.fitText5" type="text" />
      <Uiinput6App v-model="review.fitText6" type="text" />
      <Uiinput7App v-model="review.fitText7" type="text" />
      <Uiinput8App v-model="review.fitText8" type="password" />
    </div>
  </form>
</template>
<style scoped>
.for-form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
}
.for-inputs1-4 {
  grid-row: 1/2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 14px;
}
.for-inputs5-8 {
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 14px;
}
</style>
