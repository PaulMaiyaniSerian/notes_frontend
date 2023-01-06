<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="header_wrapper">
    <div class="header_info">
      <h1>Access all <span>Diploma</span> PDF notes.</h1>
      <span>
        Select your year of study and semester whose notes you want to download.
      </span>
    </div>
  </div>
</template>
<style scoped>
.header_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--extra-light-color);
  margin: auto;
  width: 80%;
  height: 80vh;
}
.header_info {
  width: 60%;
}
.header_info h1 {
  font-size: 54px;
  font-weight: 900;
}
.header_info h1 span {
  color: var(--diploma-color);
  font-size: 54px;
  font-weight: 900;
}
.header_info span {
  font-size: 28px;
  font-weight: 300;
}
</style>