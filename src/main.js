import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
import VueScrollTo from "vue-scrollto";

const app = createApp(App);

app.use(createPinia());
app.use(bootstrap);
app.use(VueScrollTo, {
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

app.mount("#app");
