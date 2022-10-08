<script setup>
import { reactive } from "vue";
import FirstNameInput from "./UIinpit/FirstNameInput.vue";
import LastNameInput from "./UIinpit/LastNameInput.vue";
import CompanyInput from "./UIinpit/CompanyInput.vue";
import EmailInput from "./UIinpit/EmailInput.vue";
import JobTitleInput from "./UIinpit/JobTitleInput.vue";
import CountryInput from "./UIinpit/CountryInput.vue";
import StateInput from "./UIinpit/StateInput.vue";
import ZipCodeInput from "./UIinpit/ZipCodeInput.vue";

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
      <FirstNameInput v-model="review.fitText1" type="text" />
      <LastNameInput v-model="review.fitText2" type="text" />
      <CompanyInput v-model="review.fitText3" type="text" />
      <EmailInput v-model="review.fitText4" type="email" />
    </div>
    <div class="for-inputs5-8">
      <JobTitleInput v-model="review.fitText5" type="text" />
      <CountryInput v-model="review.fitText6" type="text" />
      <StateInput v-model="review.fitText7" type="text" />
      <ZipCodeInput v-model="review.fitText8" type="number" />
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
  grid-template-rows: 100px;
  column-gap: 14px;
  place-items: center;
}
.for-inputs5-8 {
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px;
  column-gap: 14px;
  place-items: center;
}
@media (min-width: 376px) and (max-width: 1700px) {
  .for-inputs1-4 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 100px;
    column-gap: 7px;
    place-items: center;
  }
  .for-inputs5-8 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 7px;
    place-items: center;
  }
}
</style>
