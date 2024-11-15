import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Skills from '../pages/SkillsPage.vue';
import About from '../pages/About.vue';
import Achievements from '../pages/Achievements.vue';
import Resume from '../pages/Resume.vue';
import Certificates from '../pages/Certificates.vue';
import LandingPage from '../components/LandingPage.vue';

const routes = [
  { path: '/', component: LandingPage },         // Add LandingPage as the home route
  { path: '/home', component: Home },
  { path: '/skills', component: Skills },
  { path: '/about', component: About },
  { path: '/achievements', component: Achievements },
  { path: '/resume', component: Resume },
  { path: '/certificates', component: Certificates },
  { path: '/:pathMatch(.*)*', redirect: '/' },   // Catch-all fallback
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
