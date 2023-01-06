<script setup>
import { RouterLink } from "vue-router";
const semester = {
  title: "Semester 1",
  units: [
    {
      title: "Semester 1",
      unit: "GUCC 100 Computer Application skills",
    },
    {
      title: "Semester 1",
      unit: "GUCC 102 National Cohesion & Integration",
    },
    {
      title: "Semester 1",
      unit: "GUCC 103 Quantitative Skills",
    },
    {
      title: "Semester 1",
      unit: "BSCS 100 Discrete Structures I",
    },
    {
      title: "Semester 1",
      unit: "BSCS 101 Fundamentals of Computing",
    },
    {
      title: "Semester 1",
      unit: "BSCS 102 Principles of Operating Systems",
    },
    {
      title: "Semester 1",
      unit: "unit 7",
    },
  ],
};
</script>


<template>
  <div class="units_container">
    <div class="units_title">
      <h1>
        {{ semester.title }}
      </h1>
    </div>
    <div class="units_wrappper">
      <div
        class="unit_cont_wrapper"
        v-for="name in semester.units"
        :key="name.title"
      >
        <RouterLink to="/">
          <div class="unit_title">
            {{ name.unit }}
          </div>
          <div class="unit_icon">
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.units_container {
  width: 80%;
  position: relative;
  margin: auto;
  padding: 6px 12px;
}
.units_wrappper {
  position: relative;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  gap: 4%;
}
.unit_cont_wrapper {
  width: 60%;
  border: 1px solid var(--extra-light-color);
  padding: 10px 0;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 12px auto;
}
.unit_cont_wrapper a {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-decoration: none;
}
.units_title {
  color: var(--light-text);
  margin: 8px auto;
}
.unit_title {
  color: var(--light-text);
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
}
.unit_icon i {
  color: var(--light-text);
}
.unit_cont_wrapper:hover .unit_icon i {
  color: teal;
}
</style>