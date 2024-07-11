import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const path = "/Mystery-of-Antiques-bg";

export const HomeRoute: RouteRecordRaw = {
  path: `${path}/`,
  name: "Home",
  component: () => import("@/views/Home.vue"),
  meta: {
    title: "大廳",
  },
};

export const RoomRoute: RouteRecordRaw = {
  path: `${path}/room/:roomId`,
  name: "Room",
  component: () => import("@/views/Room.vue"),
  meta: {
    title: "房間",
  },
};

export const GameRoute: RouteRecordRaw = {
  path: `${path}/game/:roomId`,
  name: "Game",
  component: () => import("@/views/Game.vue"),
  meta: {
    title: "遊戲房",
  },
};

export const VoteRoute: RouteRecordRaw = {
  path: `${path}/vote/:roomId`,
  name: "Vote",
  component: () => import("@/views/Vote.vue"),
  meta: {
    title: "鑑人環節",
  },
};

export const EndGameRoute: RouteRecordRaw = {
  path: `${path}/endGame/:roomId`,
  name: "EndGame",
  component: () => import("@/views/EndGame.vue"),
  meta: {
    title: "遊戲結束",
  },
};

export const constantRouter: RouteRecordRaw[] = [
  HomeRoute,
  RoomRoute,
  GameRoute,
  VoteRoute,
  EndGameRoute,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRouter,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const redirectPath = to.query.redirectPath as string | undefined;
  if (redirectPath) {
    next(redirectPath);
  } else {
    next();
  }
});

export default router;
