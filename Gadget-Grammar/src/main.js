import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

axios.defaults.baseURL = "https://gadgetgrammarservice.onrender.com/";

// Setup router
app.use(router);

app.mount("#app");
