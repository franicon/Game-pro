import { createRouter, createWebHistory } from "vue-router";

// COMPONENT DIR
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import GameDetails from "@/components/GameDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/details",
    name: "details",
    component: GameDetails,
  },
  {
    path: "/:catachAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
