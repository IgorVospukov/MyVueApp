<script setup>
import { reactive } from "vue";
import UiinputApp1 from "./UIinpit/UiinputApp1.vue";
const review = reactive({
  fitText1: "11",
  fitText2: "",
  fitText3: "",
  fitText4: "",
  fitText5: "",
  fitText6: "",
  fitText7: "",
  fitText8: "",
});
const submit = () => {
  console.log("submit!");
};
</script>
<template>
  <form @submit.prevent.stop="submit" class="for-form">
    <div class="for-inputs1-4">
      <UiinputApp1
        v-model="review.fitText1"
        type="text"
        placeholder="Enter Your Name"
      />
      <UiinputApp v-model="review.fitText2" />
      <UiinputApp v-model="review.fitText3" />
      <UiinputApp v-model="review.fitText4" />
      <UiinputApp v-model="review.fitText5" />
      <UiinputApp v-model="review.fitText6" />
      <UiinputApp v-model="review.fitText7" />
      <UiinputApp v-model="review.fitText8" />
      <div class="for-input2">
        <p>Last Name*</p>
        <input
          type="text"
          v-model="review.fitText2"
          placeholder="Enter Your Last Name"
        />
      </div>
      <div class="for-input3">
        <p>Company*</p>
        <input
          type="text"
          v-model="review.fitText3"
          placeholder="Enter Your Company"
        />
      </div>
      <div class="for-input4">
        <p>Email*</p>
        <input
          type="email"
          v-model="review.fitText4"
          placeholder="Enter Your Email"
        />
      </div>
    </div>
    <div class="for-inputs5-8">
      <div class="for-input5">
        <p>Job Title*</p>
        <input
          type="text"
          v-model="review.fitText5"
          placeholder="Enter Your Job Title"
        />
      </div>
      <div class="for-input6">
        <p>Country*</p>
        <input
          type="text"
          v-model="review.fitText6"
          placeholder="Enter Your Country"
        />
      </div>
      <div class="for-input7">
        <p>State*</p>
        <input
          type="text"
          v-model="review.fitText7"
          placeholder="Enter Your State"
        />
      </div>
      <div class="for-input8">
        <p>Zip Code*</p>
        <input
          type="password"
          v-model="review.fitText8"
          placeholder="Enter Your Zip Code"
        />
      </div>
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 14px;
}
.for-inputs5-8 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 14px;
}
.for-inputs1-4 > div > p {
  margin: 3px;
}
.for-inputs1-4 > div > input {
  width: 278px;
  height: 40px;
}

.for-inputs5-8 > div > p {
  margin: 3px;
}
.for-inputs5-8 > div > input {
  width: 278px;
  height: 40px;
}
</style>
