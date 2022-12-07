import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

console.log('AEM Vite app is running');

const pinia = createPinia();

const createMyApp = () => createApp(App).use(pinia);

createMyApp().mount('#test-app');

createMyApp().mount('#app');
