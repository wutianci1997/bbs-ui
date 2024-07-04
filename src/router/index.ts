import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/index.vue";
import NotFound from "../views/NotFound/index.vue";
import NotAuthority from "../views/NotAuthority/index.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/403",
    name: "NotAuthority",
    component: NotAuthority,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
