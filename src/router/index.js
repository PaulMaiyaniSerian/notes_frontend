import { createRouter, createWebHistory } from 'vue-router'
import UnitsView from '../views/UnitsView.vue'
import UnitsPage from '../views/UnitsPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      name: 'main',
      component: UnitsView
    },
    {
      path: '/main/year/:year_id/course/:course_id/semester/:semester_name_id/course_type/:course_type_id/unit/:unit_id/documents',
      name: 'unit_documents',
      component: UnitsPage
    },
  ]
})

export default router
