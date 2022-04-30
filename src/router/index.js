import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../pages/Users.vue";
import Individual from "../pages/Individual.vue";
import Home from "../pages/Home.vue";
import User from "../pages/User.vue";

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
		path: "/user/:id",
		name: "User",
		component: User,
	},
	{
		path: "/Individual",
		name: "Individual",
		component: Individual,
	},
];

const router = new VueRouter({
	// mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
