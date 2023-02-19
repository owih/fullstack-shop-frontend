// Composables
import { createRouter, createWebHistory } from 'vue-router';
import ProfilePage from '@/views/ProfilePage.vue';
import AuthPage from '@/views/AuthPage.vue';
import InfoPage from '@/views/InfoPage.vue';
import CatalogDetailPage from '@/views/CatalogDetailPage.vue';
import CatalogPage from '@/views/CatalogPage.vue';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: CatalogPage,
  },
  {
    path: '/catalog/:id',
    name: 'CatalogDetail',
    component: CatalogDetailPage,
  },
  {
    path: '/info',
    name: 'Info',
    component: InfoPage,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
