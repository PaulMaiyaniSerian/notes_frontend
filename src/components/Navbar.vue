<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar container">
        <div class="logo">
          <RouterLink to="/">
            <h1>PDF.Notes</h1>
          </RouterLink>
        </div>
        <div class="nav_search_bar">
          <input type="search" placeholder="Search.." /><i
            class="fa fa-search"
          ></i>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* SMAL DEVICES */
@media only screen and (max-width: 768px) and (min-width: 320px) {
  .wrapper {
    margin: auto;
    padding: 0;
  }
  .container {
    width: 100%;
    margin: 16px auto;
    padding: 0;
  }
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    padding: 0;
  }
  .logo {
    width: 100%;
    margin: auto;
    margin-bottom: 12px;
  }
  .nav_search_bar {
    width: 100%;
    margin: auto;
  }
  .nav_search_bar input {
    width: 100% !important;
  }
}
/* LARGE DEVICES */
.container {
  width: 95%;
  margin: 16px auto;
  padding: 15px;
  position: relative;
}
.navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-block: 15px;
  border-radius: 4px;
}
.navbar a {
  text-decoration: none;
  color: var(--extra-dark-color);
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  font-weight: 300;
}
.logo h1 {
  text-transform: uppercase;
  font-weight: 800;
}
.nav_search_bar {
  margin: 0 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.nav_search_bar input {
  border: 1px solid var(--extra-dark-color);
  padding: 8px 12px;
  width: 300px;
  color: var(--dark-color);
  font-size: 14px;
  border-radius: 10px;
  padding-right: 34px;
}
.nav_search_bar input:focus {
  outline: none;
}
.nav_search_bar i {
  color: var(--extra-dark-color);
  position: absolute;
  right: 4%;
}

/* @media screen and (max-width: 600px) {
 
} */
</style>
