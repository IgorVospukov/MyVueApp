import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

const app = createApp(App);

app.use(createPinia());
app.use(bootstrap);

app.mount("#app");
