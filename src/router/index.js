import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ConditionalRendering from '../views/9_ConditionalRendering.vue'
import Vfor from '../views/10_V_For.vue'

const routes = [
  { path: "/", name: "Home", component: Home, },
  { path: "/databind", name: "DataBind", component: () => import("../views/1_Data_Bind.vue"), },
  { path: "/vtext", name: "VText", component: () => import("../views/2_V_Text.vue"), },
  { path: "/vhtml", name: "VHtml", component: () => import("../views/3_V_Html.vue"), },
  { path: "/vbind", name: "VBind", component: () => import("../views/4_V_Bind_Id.vue"), },
  { path: "/applycss", name: "ApplyCss", component: () => import("../views/5_Apply_Css.vue"), },
  { path: "/bindstyle", name: "bindstyle", component: () => import("../views/6_BindingStyle.vue"), },
  { path: "/shorthandsyntax", name: "ShortHandSyntax", component: () => import("../views/7_ShordHand_Syntax.vue"), },
  { path: "/conditionalrendering", name: "conditionalrendering", component: ConditionalRendering, },
  { path: "/vfor", name: "vfor", component: Vfor, },
  { path: "/methods", name: "methods", component: () => import("../views/11_Methods.vue") },
  { path: "/formhandle", name: "formhandle", component: () => import("../views/12_FormValue.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
