import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UnitsView from '../views/UnitsView.vue'
import DegreeView from '../views/DegreeView.vue'
import DiplomaView from '../views/DiplomaView.vue'
import CertificateView from '../views/CertificateView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/degree_page',
      name: 'degree',
      component: DegreeView
    },
    {
      path: '/diploma_page',
      name: 'diploma',
      component: DiplomaView
    },
    {
      path: '/certificate_view',
      name: 'certificate',
      component:CertificateView
    },
    {
      path: '/units_view',
      name: 'units',
      component: UnitsView
    },
  ]
})

export default router
