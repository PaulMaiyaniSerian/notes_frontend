<script setup>
import { onBeforeMount, onMounted, ref, watch } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { getApi } from "../api/endpoint";
import Footer from "../components/Footer.vue";
import Loader from "./Loader.vue";
import BigLoader from "./BigLoader.vue";
import Scroll from "./Scroll.vue";

const router = useRouter();
const units = ref([]);
const isUnitsLoading = ref(false);
const unitsref = ref(null);
const course_types = ref([]);
const isCourseTypesLoading = ref(false);
const selectedCourseTypeId = ref(null);
const courses = ref([]);
const isCoursesLoading = ref(false);
const selectedCourseId = ref(null);
const semesters = ref([]);
const isSemestersLoading = ref(false);
const selectedSemesterNameId = ref(null);
const years = ref([]);
const isYearsLoading = ref(false);
const selectedYearId = ref(null);
const isOpen = ref(false);
const message = ref(null);

// redirect to units document page
const redirectToUnitDocuments = (unit_id) => {
  router.push({
    name: "unitdocuments",
    params: {
      unit_id: unit_id,
      year_id: selectedYearId.value,
      course_id: selectedCourseId.value,
      semester_name_id: selectedSemesterNameId.value,
      course_type_id: selectedCourseTypeId.value,
    },
  });
};

const loadUnitsWithDocsApi = () => {
  const url = "/core/course_class_units";
  return getApi.get(url, {
    params: {
      year_id: selectedYearId.value,
      course_id: selectedCourseId.value,
      semester_name_id: selectedSemesterNameId.value,
      course_type_id: selectedCourseTypeId.value,
    },
  });
};

const handleCourseTypeChange = () => {
  console.log(selectedCourseTypeId.value);
  console.log(selectedCourseId.value);
  console.log(selectedSemesterNameId.value);
  console.log(selectedYearId.value);
  console.log(isOpen.value);

  isOpen.value = isOpen;
  isUnitsLoading.value = true;
  console.log("start units loader");
  loadUnitsWithDocsApi()
    .then((response) => {
      console.log(response.data);
      units.value = response.data;

      if (units.value.length == 0) {
        message.value = "No Documents Found";
      } else {
        message.value = null;
      }

      isUnitsLoading.value = false;
    })
    .catch((error) => {
      message.value = "Select all the above Input fields first!";

      // check whether error is from network or backend
      if (error.code == "ERR_NETWORK") {
        console.log("Network Error");
        //   show_popup_error(toast, "Cannot Connect to the server", "Network Error")
      } else {
        // error from the backend
        const error_data = error.response.data;
        console.log(error_data);
        //   show_popup_error(toast, "Error Loading Carousel", "Error")
      }
      // stop_loader(is_loading)
      isUnitsLoading.value = false;
    });

  console.log(unitsref + "THis is the function");
  const element = unitsref.value;
  const top = element.offsetTop;

  window.scrollTo(0, top);
};

const semesterFilterViewApi = () => {
  const url = "/core/semester_filter";
  return getApi.get(url, {
    params: {
      course_id: selectedCourseId.value,
      course_type_id: selectedCourseTypeId.value,
    },
  });
};

const check_courseType_courseId = () => {
  if (selectedCourseId.value && selectedCourseId) {
    // call the semesters filter view
    isSemestersLoading.value = true;
    console.log("start loader");
    semesterFilterViewApi()
      .then((response) => {
        console.log(response.data);
        semesters.value = response.data;
        isSemestersLoading.value = false;
        console.log("stop loader");
      })
      .catch((error) => {
        // check whether error is from network or backend
        if (error.code == "ERR_NETWORK") {
          console.log("Network Error");
          //   show_popup_error(toast, "Cannot Connect to the server", "Network Error")
        } else {
          // error from the backend
          const error_data = error.response.data;
          console.log(error_data);
          //   show_popup_error(toast, "Error Loading Carousel", "Error")
        }
        // stop_loader(is_loading)
        isSemestersLoading.value = false;
        console.log("stop loader");
      });
  }
};

watch([selectedCourseTypeId, selectedCourseId], () => {
  check_courseType_courseId();

  // continue
});

const getCourseTypesApi = () => {
  const url = "/core/course_type_list_view";
  return getApi.get(url);
};

const getCoursesApi = () => {
  const url = "/core/course_list";
  return getApi.get(url);
};

const getYearsApi = () => {
  const url = "/core/year_list";
  return getApi.get(url);
};

onMounted(() => {
  isYearsLoading.value = true;
  isOpen.value = !isOpen;

  getYearsApi()
    .then((response) => {
      console.log(response.data);
      years.value = response.data;
      isYearsLoading.value = false;
    })
    .catch((error) => {
      // check whether error is from network or backend
      if (error.code == "ERR_NETWORK") {
        console.log("Network Error");
        //   show_popup_error(toast, "Cannot Connect to the server", "Network Error")
      } else {
        // error from the backend
        const error_data = error.response.data;
        console.log(error_data);
        //   show_popup_error(toast, "Error Loading Carousel", "Error")
      }
      // stop_loader(is_loading)
      isYearsLoading.value = false;
    });
  isCourseTypesLoading.value = true;
  getCourseTypesApi()
    .then((response) => {
      console.log(response.data);
      course_types.value = response.data;
      isCourseTypesLoading.value = false;
    })
    .catch((error) => {
      // check whether error is from network or backend
      if (error.code == "ERR_NETWORK") {
        console.log("Network Error");
        //   show_popup_error(toast, "Cannot Connect to the server", "Network Error")
      } else {
        // error from the backend
        const error_data = error.response.data;
        console.log(error_data);
        //   show_popup_error(toast, "Error Loading Carousel", "Error")
      }
      // stop_loader(is_loading)
      isCourseTypesLoading.value = false;
    });

  // fetch courses
  isCoursesLoading.value = true;
  getCoursesApi()
    .then((response) => {
      console.log(response.data);
      courses.value = response.data;
      isCoursesLoading.value = false;
    })
    .catch((error) => {
      // check whether error is from network or backend
      if (error.code == "ERR_NETWORK") {
        console.log("Network Error");
        //   show_popup_error(toast, "Cannot Connect to the server", "Network Error")
      } else {
        // error from the backend
        const error_data = error.response.data;
        console.log(error_data);
        //   show_popup_error(toast, "Error Loading Carousel", "Error")
      }
      // stop_loader(is_loading)
      isCoursesLoading.value = false;
    });
});
</script>

<template>
  <div class="units_container">
    <div class="page_wrapper">
      <!-- HEADER INFO -->
      <div class="header_info">
        <p>
          A simple and easier way of accessing your courses'
          <span class="pdf_color">PDF</span> notes
          <span class="under_score">_</span>
        </p>
        <span class="info_desc">
          Simply select your preffered options below to choose the units whose
          notes you want to download.
        </span>
      </div>

      <!-- MINI COURSE NAV -->
      <div class="mini_select_nav">
        <div class="select_option">
          <label for="select">Year:</label>
          <Loader v-if="isYearsLoading" />
          <select
            v-else
            name="year"
            id="select"
            class="select-class"
            v-model="selectedYearId"
          >
            <!-- ADDED A KEY -->
            <option :value="year.id" v-for="year in years" :key="year">
              {{ year.name }}
            </option>
          </select>
        </div>
        <div class="select_option">
          <label for="select">CourseType:</label>
          <Loader v-if="isCourseTypesLoading" />

          <select
            v-else
            name="course_type"
            id="select"
            class="select-class"
            v-model="selectedCourseTypeId"
          >
            <!-- ADDED A KEY -->
            <option
              :value="course_type.id"
              v-for="course_type in course_types"
              :key="course_type"
            >
              {{ course_type.name }}
            </option>
          </select>
        </div>
        <div class="select_option">
          <label for="select">Course Name:</label>
          <Loader v-if="isCoursesLoading" />

          <select
            v-else
            name="course_name"
            id="select"
            class="select-class"
            v-model="selectedCourseId"
          >
            <!-- ADDED A KEY -->
            <option :value="course.id" v-for="course in courses" :key="course">
              {{ course.name }}
            </option>
          </select>
        </div>
        <div class="select_option">
          <label for="select">Semester:</label>
          <Loader v-if="isSemestersLoading" />

          <select
            v-else
            name="semester"
            id="select"
            class="select-class"
            v-model="selectedSemesterNameId"
          >
            <!-- ADDED A KEY -->
            <option
              :value="semester.semester_name"
              v-for="semester in semesters"
              :key="semester.semester"
            >
              {{ semester.semester_str_name }}
            </option>
          </select>
        </div>
      </div>

      <!-- LOAD FILES BUTTON -->
      <div class="mini_select_nav_btn">
        <button @click="handleCourseTypeChange">Load Units</button>
      </div>
      <div class="scroll_bar" v-if="isOpen">
        <Scroll />
      </div>
    </div>

    <!-- UNITS_RESPONSE -->
    <div :class="isOpen ? 'units_wrappper' : ''" ref="unitsref">
      <!-- <h1>Units</h1> -->
      <div class="big_loader_canvas" v-if="isUnitsLoading">
        <BigLoader />
      </div>

      <div
        class="unit_cont_wrapper"
        v-else
        v-for="unit in units"
        :key="unit.id"
      >
        <a @click.prevent="redirectToUnitDocuments(unit.id)">
          <div class="unit_title">
            {{ unit.name }}
          </div>
          <div class="unit_icon">
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </a>
      </div>

      <div class="message" v-if="message">
        {{ message }}
      </div>
    </div>

    <Footer />
  </div>
</template>
<style scoped>
* {
  scroll-behavior: smooth;
}
/* SMAL DEVICES */
@media only screen and (max-width: 768px) and (min-width: 280px) {
  .units_container {
    width: 100%;
  }

  .page_wrapper {
    width: 100% !important;
  }

  .header_info {
    width: 100%;
  }

  .header_info p,
  .header_info p .pdf_color {
    font-size: 34px !important;
    font-weight: 900;
  }

  .header_info .info_desc {
    font-size: 18px !important;
  }

  .mini_select_nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 55vh !important;
    padding: 10px 0;
  }

  .select_option {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  .select_option label {
    margin: 2px;
    text-align: left;
    width: 100%;
  }

  .select_option select {
    width: 100%;
    outline: none;
  }

  .mini_select_nav option {
    width: 100%;
    color: var(--dark-text);
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  .mini_select_nav_btn {
    width: 80%;

    margin: 12px auto !important;
    margin-top: 10% !important;
    display: flex;
    align-items: center;
  }
  .it_is_closed {
    /* height: 70vh; */
    opacity: 0;
  }
  .units_wrappper {
    position: relative;
    width: 100% !important;
    /* background: lime; */
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    /* height: 50vh; */
    min-height: 70vh;
  }

  .unit_cont_wrapper {
    width: 90% !important;
    padding: 4px;
    font-size: 75%;
    /* background: red; */
  }

  .unit_title {
    font-size: 16px !important;
  }

  .unit_cont_wrapper a {
    padding: 4px;
  }
}

/* LARGE DEVICES */
.units_container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 85vh;
}

.page_wrapper {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: var(--dark-background);
  border-radius: 4px;
}

.header_info {
  width: 80%;
  margin: 10px auto;
  color: var(--light-text);
  padding: 12px 24px;
}

.header_info p .pdf_color {
  color: var(--light-green-color);
}

.header_info p,
.header_info p .pdf_color {
  font-size: 40px;
  font-weight: 900;
}

.header_info .info_desc {
  font-size: 20px;
  font-weight: 300;
}

.header_info .under_score {
  color: var(--light-color);
  font-weight: bold;
  animation: beep 0.8s linear infinite;
}

@keyframes beep {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.mini_select_nav {
  color: var(--dark-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  width: 100%;
  height: 100px;
  padding: 0 6px;
  margin: auto;
}

.select_option {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 4px;
}

.mini_select_nav_btn {
  margin: 2% auto;
}

.mini_select_nav_btn button {
  color: var(--dark-text);
  border: none;
  background: var(--light-background);
  font-size: 18px;
  font-weight: 700;
  padding: 6px 8px;
  cursor: pointer;
  border-radius: 6px;
  margin: auto;
}

.mini_select_nav_btn button:hover {
  background: var(--dim-light-background);
}

.mini_select_nav label {
  font-size: 18px;
  margin-right: 8px;
  color: var(--light-text);
}

.mini_select_nav select {
  border: 1px solid var(--light-background);
  border-radius: 4px;
  font-size: 18px;
  font-weight: 300;
  padding: 6px 8px;
  color: var(--dark-text);
  text-transform: capitalize;
  cursor: pointer;
  outline: none;
}

.mini_select_nav option {
  color: var(--dark-text);
  cursor: pointer;
}

.units_wrappper {
  /* position: relative; */
  width: 80%;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 4%;
  margin: 10px auto;
  margin-bottom: 12px;
  /* background: lime; */
}

.unit_cont_wrapper {
  width: 40%;
  border: 1px solid var(--dark-background);
  padding: 5px 0;
  display: flex;
  margin: auto;
  justify-content: center;
  border-radius: 4px;
  margin: 12px 0;
  flex-direction: column;
  cursor: pointer;
}

.unit_cont_wrapper a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  padding: 10px;
}

.units_title {
  color: var(--dark-text);
  margin: 8px auto;
}

.unit_title {
  color: var(--dark-text);
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
}

.unit_icon i {
  color: var(--dark-text);
}

.unit_cont_wrapper:hover .unit_icon i {
  color: var(--light-green-color);
}

.big_loader_canvas {
  position: absolute;
  width: 100%;

  top: 0%;

  left: 0%;
  /* background: rgba(255,255,255,0.6); */
}
</style>
