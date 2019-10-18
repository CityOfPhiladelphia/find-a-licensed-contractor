import BrowserSupport from  "./browser-support.js";
BrowserSupport.isIE();

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/li/find-a-licensed-contractor/",
  routes: [
    {
      path: '/',
      name: 'main',
    },
  ],
});

new Vue({ // eslint-disable-line no-new
  el: '#vue-app',
  router,
  render (h) {
    return h(App, {});
  },
});
