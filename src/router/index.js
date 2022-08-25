import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import Questions from "../views/Questions.vue";
import Search from "../views/Search.vue";
import Course from "../views/Course.vue";
import Answer from "../views/Answer.vue";

const routes = [
	{ path: "/", name: "Home", component: Home },
	{ path: "/library", name: "Library", component: Library },
	{ path: "/questions", name: "Questions", component: Questions },
	{ path: "/search", name: "Search", component: Search },
	{ path: "/account", name: "Account", component: Home },
	{ path: "/course", name: "Course", component: Course },
	{ path: "/answer", name: "Answer", component: Answer },
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

export default router;
