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
  background: var(--extra-dark-color);
  font-family: "Nunito", sans-serif;
}
:root {
  --light-text: #f8f8f8;
  --dark-text: #000;
  --dim-light-text: #ddd;
  --light-background: #f8f8f8;
  --dark-background: #212121;
  --extra-dark-color: #000;
  --extra-light-color: #fff;
  --light-dark-rgba: rgba(0, 0, 0, 0.2);
  --degree-color: #202c80;
  --diploma-color: #dd9933;
  --certificate-color: #30b570;
}
</style>