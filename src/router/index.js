import Vue from 'vue';
import Router from 'vue-router';
import news from '../components/news/news.vue';
import movie from '../components/movie/movie.vue';
import person from '../components/person/person.vue';
import radio from '../components/radio/radio.vue';
import zhibo from '../components/zhibo/zhibo.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  scrollBehavior (to, from, savedPosition) { // 路由切换的时候页面回到顶部,第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  },
  routes: [
    {
      path: '/',
      name: 'news',
      component: news
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/zhibo',
      name: 'zhibo',
      component: zhibo
    }
  ]
});
