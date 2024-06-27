// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
export const HomeRoute = {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
        title: "大廳",
    },
};
export const RoomRoute = {
    path: "/room/:roomId",
    name: "Room",
    component: () => import("@/views/Room.vue"),
    meta: {
        title: "房間",
    },
};
export const GameRoute = {
    path: "/game/:roomId",
    name: "Game",
    component: () => import("@/views/Game.vue"),
    meta: {
        title: "遊戲房",
    },
};
export const constantRouter = [
    HomeRoute,
    RoomRoute,
    GameRoute,
];
const router = createRouter({
    history: createWebHistory(),
    routes: constantRouter,
    strict: true,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        else {
            return { top: 0 };
        }
    },
});
export default router;
