import { createRouter, createWebHashHistory } from "vue-router";
import UnitsView from "../views/UnitsView.vue";
import UnitsPage from "../views/UnitsPage.vue";
import UnitDocumentsView from "../views/UnitDocumentsView.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: UnitsView,
    },
    {
      path: "/year/:year_id/course/:course_id/semester/:semester_name_id/course_type/:course_type_id/unit/:unit_id/documents",
      name: "unitdocuments",
      component: UnitsPage,
    },
  ],
});

export default router;
