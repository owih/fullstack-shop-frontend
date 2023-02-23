import SideLink from '@/types/sideLink';

export default [
  {
    id: 0,
    icon: 'mdi-alpha-n-box',
    title: 'Home',
    value: 'home',
    url: '/',
  },
  {
    id: 1,
    icon: 'mdi-creation',
    title: 'Catalog',
    value: 'catalog',
    url: '/catalog',
  },
  {
    id: 2,
    icon: 'mdi-account',
    title: 'Profile',
    value: 'profile',
    url: '/profile',
  },
  {
    id: 3,
    icon: 'mdi-forum',
    title: 'Info',
    value: 'info',
    url: '/info',
  },
  {
    id: 4,
    icon: 'mdi-cart',
    title: 'Cart',
    value: 'cart',
    modal: 'cart',
  },
  {
    id: 5,
    icon: 'mdi-heart',
    title: 'Favorites',
    value: 'favorites',
    modal: 'favorites',
  },
] as SideLink[];
