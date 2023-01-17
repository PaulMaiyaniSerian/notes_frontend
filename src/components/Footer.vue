<script setup>
const date = new Date().getFullYear();
</script>

<template>
  <div class="footer_wrapper">@{{ date }} Copyright | CodeBufferz</div>
</template>
<style scoped>
/* SMAL DEVICES */
@media only screen and (max-width: 768px) and (min-width: 280px) {
  .footer_wrapper {
    /* position: relative !important; */
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 10px 32px;
    /* bottom: 0%; */
    /* color: red !important; */
  }
}

/* LARGE DEVICES */
@media only screen and (max-width: 2560px) and (min-width: 768px)and (min-width: 768px) {
  .footer_wrapper {
    position: relative;
    background: transparent;
    color: var(--dark-background);
    width: 100%;
    padding: 10px 32px;
    font-size: 18px;
  }
}
</style>