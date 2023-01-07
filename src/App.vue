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
  --light-text: #212121;
  --dark-text: #fff;
  --dim-light-text: #181818;
  --dim-dark-background: #181818;
  --light-background: #000;
  --dark-background: #f8f8f8;
  --extra-dark-color: #fff;
  --extra-light-color: #000;
  --light-dark-rgba: transparent;
  --degree-color: #202c80;
  --diploma-color: #dd9933;
  --certificate-color: #30b570;
}
</style>