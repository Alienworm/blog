import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/article',
    name: 'Article',
    props: route => ({ article_id: route.query.article_id }),
    component: () => import('../views/Article.vue')
  },
  {
    path: '/search',
    name: 'Search',
    props: route => ({ keyword: route.query.keyword, type: route.query.type }),
    component: () => import('../views/Search.vue')
  },
  {
    path: '/article-edit',
    name: 'ArticleEdit',
    component: () => import('../views/ArticleEdit.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue')
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
