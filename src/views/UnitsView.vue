<script setup>
import UnitParent from "../components/UnitParent.vue";
import Navbar from "../components/Navbar.vue";
</script>
<template>
  <div class="units_container">
    <Navbar />
    <UnitParent />
  </div>
</template>
<style scoped>
.units_container{
  display: grid;
}
</style>