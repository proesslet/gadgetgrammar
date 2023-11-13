import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// For development, change default to: "http://localhost:5173"
// For production, change default to: "https://gadgetgrammarservice.onrender.com/"
// DO NOT PUSH DEVELOPMENT VERSION TO GITHUB - it will break the production build
axios.defaults.baseURL = "https://gadgetgrammarservice.onrender.com/";

// Setup router
app.use(router);

app.mount("#app");
