import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/databind", name: "DataBind", component: () => import("../views/1_Data_Bind.vue"), },
  { path: "/vtext", name: "VText", component: () => import("../views/2_V_Text.vue"), },
  { path: "/vhtml", name: "VHtml", component: () => import("../views/3_V_Html.vue"), },
  { path: "/vbind", name: "VBind", component: () => import("../views/4_V_Bind_Id.vue"), },
  { path: "/applycss", name: "ApplyCss", component: () => import("../views/5_Apply_Css.vue"), },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
