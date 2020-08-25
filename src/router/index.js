import Router from 'vue-router';
import Vue from 'vue';

import Home from '@/pages/Home.vue';
import GenerateTree from '@/pages/GenerateTree.vue';
import DisplayExistingTree from '@/pages/DisplayExistingTree.vue';
import PageNotFound from '@/pages/PageNotFound.vue';

import * as helpers from '@/helpers';
const { storageHandlers }  = helpers;

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'main' }
  },
  {
    path: '/generate-a-tree',
    name: 'GenerateTree',
    component: GenerateTree,
    meta: { layout: 'main' }
  },
  {
    path: '/display-existing-tree',
    name: 'DisplayExistingTree',
    component: DisplayExistingTree,
    meta: { layout: 'main' }
  },
  {
    path: '*',
    name: 'NotFound',
    component: PageNotFound,
    meta: { layout: 'empty' }
  }
]

const router = new Router({
  routes
});

export default router;