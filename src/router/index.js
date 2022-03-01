import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../pages/Users.vue";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import User from "../pages/User.vue";
import UserPost from "../pages/UserPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/users",
    nmae: "Users",
    component: Users,
  },
  {
    path: "/userpost",
    name: "UserPost",
    component: UserPost,
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
