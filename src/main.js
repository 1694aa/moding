import { createApp } from 'vue';

import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';

import App from './App.vue';

import router from './router';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

 

const app = createApp(App);

 

app.config.warnHandler = () => null;

 

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {

 app.component(key, component);

}

 

app.use(router);

app.use(ElementPlus);

 

// 在 Vue 应用程序挂载后检查登录状态

app.mount('#app');