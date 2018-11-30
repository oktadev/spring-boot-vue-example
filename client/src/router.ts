import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import OktaVuePlugin from '@okta/okta-vue';
import BeerList from '@/components/BeerList.vue';

Vue.use(Router);
Vue.use(OktaVuePlugin, {
  issuer: 'https://dev-737523.oktapreview.com/oauth2/default',
  client_id: '0oahxl84v91nfR0i10h7',
  redirect_uri: window.location.origin + '/implicit/callback',
  scope: 'openid profile email',
});

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/beer-list',
      name: 'beer-list',
      component: BeerList,
      meta: {
        requiresAuth: true,
      },
    },
    { path: '/implicit/callback', component: OktaVuePlugin.handleCallback() },
  ],
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
