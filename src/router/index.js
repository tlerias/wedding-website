import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/Home';
import Main from 'components/Main';
import LoveStory from 'components/LoveStory';
import App from 'App';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Main,
    },
  ],
});
