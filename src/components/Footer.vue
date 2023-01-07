<script setup>
const date = new Date().getFullYear();
</script>

<template>
  <div class="footer_wrapper">
    @{{ date }} Copyright.
    <span> Designed and Developed 💻 by Paul Serian and Kemboi Duncan </span>
  </div>
</template>
<style scoped>
.footer_wrapper {
  position: relative;
  background: transparent;
  color: var(--light-background);
  width: 100%;
  padding: 10px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
}
.footer_wrapper span {
  color: var(--light-background);
  background: transparent;
}
</style>