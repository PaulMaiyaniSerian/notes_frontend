<script setup>
const date = new Date().getFullYear();
</script>

<template>
  <div class="footer_wrapper">
    @{{ date }} Copyright | CodeBufferz
  </div>
</template>
<style scoped>
.footer_wrapper {
  position: relative;
  background: transparent;
  color: var(--light-background);
  width: 100%;
  padding: 10px 32px;
  font-size: 18px;
}
</style>