import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import { createStore } from "vuex";

const app = createApp(App);

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// For development, change default to: "http://localhost:3000"
// For production, change default to: "https://gadgetgrammarservice.onrender.com/"
// DO NOT PUSH DEVELOPMENT VERSION TO GITHUB - it will break the production build
axios.defaults.baseURL = "https://gadgetgrammarservice.onrender.com/";

// VueX Setup
const user = createStore({
  state() {
    return {
      loggedIn: false,
      user: {},
    };
  },
  mutations: {
    changeLoggedIn(state, payload) {
      state.loggedIn = payload;
    },
    changeUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    loggedIn(state) {
      return state.loggedIn;
    },
    user(state) {
      return state.user;
    },
  },
});

app.use(user);

// Setup router
app.use(router);

app.mount("#app");
