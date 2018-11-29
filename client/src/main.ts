import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import OktaVuePlugin from '@okta/okta-vue';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(OktaVuePlugin, {
  issuer: 'https://dev-737523.oktapreview.com/oauth2/default',
  client_id: '0oahxl84v91nfR0i10h7',
  redirect_uri: window.location.origin + '/implicit/callback',
  scope: 'openid profile email',
});
