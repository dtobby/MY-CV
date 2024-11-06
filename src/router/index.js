import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Skills from '../pages/SkillsPage.vue';
import About from '../pages/About.vue';
import Achievements from '../pages/Achievements.vue';
import Resume from '../pages/Resume.vue';
import Certificates from '../pages/Certificates.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/skills', component: Skills },
  { path: '/about', component: About },
  { path: '/achievements', component: Achievements },
  { path: '/resume', component: Resume },
  { path: '/certificates', component: Certificates },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;