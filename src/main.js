// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import App from './App';
import router from './router';
require('smoothscroll-polyfill').polyfill();

Vue.use(VueMaterial);
Vue.material.registerTheme('default', {
  primary: 'black',
  accent: 'blue-grey',
  warn: 'red',
  background: 'white'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
