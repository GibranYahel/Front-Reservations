import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateReservation.vue'),
    meta: {
      requiresIdClient: true,
      requiresIdRoom: true
    }
  },
  {
    path: '/reservations',
    name: 'reservations',
    component: () => import('../views/Reservations.vue'),
    meta: {
      requiresIdClient: true
    }
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: () => import('../views/Rooms.vue'),
    meta: {
      requiresIdClient: true
    }
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue'),
    meta: {
      requiresIdClient: true
    }
  },
  {
    path: '/updateUser',
    name: 'updateUser',
    component: () => import('../views/UpdateUser.vue'),
    meta: {
      requiresIdClient: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const store = useStore();
  const idClient = store.getters.idClient;
  const idRoom = store.getters.selectedRoomId;
  if (to.meta.requiresIdClient && !idClient) {
    next('/');
    return;
  } 
  if (to.meta.requiresIdRoom && !idRoom) {
    next('/rooms');
    return;
  }
  next();
});

export default router
