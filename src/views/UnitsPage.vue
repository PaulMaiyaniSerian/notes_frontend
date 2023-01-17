<script setup>
import UnitDocumentsView from './UnitDocumentsView.vue'
import Footer from '../components/Footer.vue'
</script>
<template>
    <div class="unit_page_wrapper">
        <UnitDocumentsView />
        <div class="footer_cont">

            <Footer />
        </div>
    </div>
</template>
<style scoped>
/* SMALL DEVICES */
@media only screen and (max-width: 768px) and (min-width: 280px) {
    .footer_cont {
        display: none;
    }
}

/* LARGE DEVICES */
@media only screen and (max-width: 2560px) and (min-width: 768px)and (min-width: 768px) {
    .footer_cont {
        display: contents;
    }
}
</style>
