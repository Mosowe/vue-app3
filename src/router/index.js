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
