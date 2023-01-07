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
        <input type="checkbox" id="toggler" />
        <label for="toggler"><i class="ri-menu-line"></i></label>
        <div class="menu">
          <ul class="list"></ul>
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
.container {
  max-width: 95%;
  margin: 16px auto;
  padding: 15px;
}
.navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-block: 15px;
  border-radius: 4px;
  background: var(--light-dark-rgba);
}
.navbar a,
.dropbtn {
  text-decoration: none;
  color: var(--extra-light-color);
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  font-weight: 300;
}
.logo h1 {
  margin-right: 50px;
  text-transform: uppercase;
  font-weight: 800;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list {
  list-style: none;
  display: flex;
  gap: 3em;
  font-size: 16px;
}
#toggler,
.navbar label {
  display: none;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--light-background);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px var(--light-dark-rgba);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: var(--extra-dark-color);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: var(--dim-light-text);
}

.dropdown:hover .dropdown-content {
  display: block;
}

.nav_search_bar {
  margin: 0 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.nav_search_bar input {
  border: 1px solid var(--extra-light-color);
  padding: 8px 12px;
  width: 300px;
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
  right: 4%;
}
@media screen and (max-width: 600px) {
  .menu {
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }
  .list {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .navbar label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  #toggler:checked ~ .menu {
    max-height: 100%;
  }
}
</style>
