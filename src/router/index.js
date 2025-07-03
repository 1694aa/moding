import { createRouter, createWebHistory } from 'vue-router';

// 引入vue组件

import home from '../views/Home.vue'



// 创建路由实例

const router = createRouter({

 history: createWebHistory(),

 routes: [        //配置路由，这里是个数组

  {

   path: '/',

   name: '/',

   component: home

  }

 ]

});

export default router;//以router命名暴露出去