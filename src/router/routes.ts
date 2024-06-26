import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        meta: { title: 'Home' },
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: 'message',
        meta: { title: 'Message' },
        component: () => import('pages/MessagePage.vue'),
      },
      {
        path: 'shop',
        meta: { title: 'Shop' },
        component: () => import('pages/ShopPage.vue'),
      },
      {
        path: 'account',
        meta: { title: 'Account' },
        component: () => import('pages/AccountPage.vue'),
      },
    ],
  },
  { path: '/login', component: () => import('pages/LoginPage.vue') },
  { path: '/register', component: () => import('pages/RegisterPage.vue') },
  {
    path: '/pet',
    meta: { title: 'Pet - Mikmik' },
    component: () => import('layouts/PetLayout.vue'),
    children: [
      {
        path: '',
        meta: { title: 'Pet - Mikmik' },
        component: () => import('pages/PetPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
