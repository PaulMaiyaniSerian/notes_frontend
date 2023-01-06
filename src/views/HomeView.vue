<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <!-- <Navbar /> -->
  <div class="home_wrapper">
    <!-- TOP NAVBAR -->
    <div class="home_nav">
      <div class="logo">
        <RouterLink to="/">
          <h1>PDF.Notes</h1>
        </RouterLink>
      </div>
      <div class="home_buttons">
        <RouterLink to="/degree_page"> Degree </RouterLink>
        <RouterLink to="/diploma_page"> Diploma </RouterLink>
        <RouterLink to="/certificate_view"> Certificate </RouterLink>
      </div>
    </div>

    <!-- SEARCH BAR -->
    <div class="nav_search_bar">
      <input type="search" placeholder="Search.." /><i class="fa fa-search"></i>
    </div>

    <!-- HOME HEADER -->
    <div class="header_wrapper">
      <div class="header_info">
        <h1>A simple and easier way of accessing your courses' PDF notes.</h1>
        <span>
          You can select your year of study and semester whose notes you want to
          download.
        </span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.home_wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home_nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4% auto;
  width: 70%;
  border-radius: 4px;
  padding: 4px 8px;
}
.home_nav a {
  text-decoration: none;
  color: var(--light-text);
}
.logo h1 {
  text-transform: uppercase;
  font-weight: 800;
}
.home_buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
}
.home_buttons a {
  font-size: 20px;
  font-weight: 700;
  padding: 4px;
}
.home_buttons a:hover {
  text-decoration: 2px solid underline;
  text-underline-offset: 5px;
}
.nav_search_bar {
  width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 2%;
}

.nav_search_bar input {
  border: 1px solid var(--extra-light-color);
  padding: 8px 12px;
  width: 500px;
  color: var(--extra-light-color);
  font-size: 14px;
  border-radius: 10px;
  padding-right: 34px;
}
.nav_search_bar input:focus {
  outline: none;
}
.nav_search_bar i {
  color: var(--extra-light-color);
  position: absolute;
  right: 2%;
}
.header_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--extra-light-color);
  margin: auto;
}
.header_info {
  width: 60%;
  margin: auto;
}
.header_info h1 {
  font-size: 54px;
  font-weight: 900;
}
.header_info span {
  font-size: 28px;
  font-weight: 300;
}
</style>