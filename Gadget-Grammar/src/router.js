import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Game from "./views/Game.vue";
import CreateAccount from "./views/CreateAccount.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/game",
      component: Game,
    },
    {
      path: "/create-account",
      component: CreateAccount,
    },
  ],
});

export default router;
