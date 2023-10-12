import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Game from "./views/Game.vue";

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
  ],
});

export default router;
