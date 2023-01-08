<script setup>
import { RouterView } from "vue-router";
</script>
<template>
  <RouterView />
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
}
:root {
  --light-text: #fff;
  --dark-text: #000;
  --dim-light-background: #ddd;
  --dim-dark-background: #181818;
  --light-background: #f8f8f8;
  --dark-background: #181818;
  --extra-dark-color: #000;
  --extra-light-color: #fff;
  --light-dark-rgba: rgba(0, 0, 0, 0.8);
  --blue-color: #202c80;
  --orange-color: #fd5f00;
  --light-green-color: #30b570;
}
</style>