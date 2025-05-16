import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import Home from './components/Home.vue';
import Information from './components/Information.vue';
import Quiz from './components/Quiz.vue';
import ProgressTracker from './components/ProgressTracker.vue';
import Donation from './components/Donation.vue';
import Login from './components/Login.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/information', name: 'Information', component: Information },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/progress', name: 'ProgressTracker', component: ProgressTracker },
  { path: '/donation', name: 'Donation', component: Donation },
  { path: '/login', name: 'Login', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
