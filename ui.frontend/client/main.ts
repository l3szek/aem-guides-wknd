import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

// import './assets/main.css';

// const app = createApp(App);

// app.use(createPinia());

// app.mount("#app");

// app.mount("#test-app");
console.log('cipa chuj ssddddsssss');

const pinia = createPinia();

const createMyApp = () => createApp(App).use(pinia);

createMyApp().mount('#test-app');

createMyApp().mount('#app');
