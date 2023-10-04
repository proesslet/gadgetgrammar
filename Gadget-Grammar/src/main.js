import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Setup router
app.use(router);

app.mount("#app");
