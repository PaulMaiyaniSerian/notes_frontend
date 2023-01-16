<script setup>

</script>

<template>
<div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<style scoped>
.loading {
 --speed-of-animation: 0.9s;
 --gap: 6px;
 --first-color: #4c86f9;
 --second-color: #49a84c;
 --third-color: #f6bb02;
 --fourth-color: #f6bb02;
 --fifth-color: #2196f3;
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-pack: center;
     -ms-flex-pack: center;
         justify-content: center;
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 width: 100px;
 gap: 6px;
 height: 100px;
}

.loading span {
 width: 4px;
 height: 50px;
 background: var(--first-color);
 -webkit-animation: scale var(--speed-of-animation) ease-in-out infinite;
         animation: scale var(--speed-of-animation) ease-in-out infinite;
}

.loading span:nth-child(2) {
 background: var(--second-color);
 -webkit-animation-delay: -0.8s;
         animation-delay: -0.8s;
}

.loading span:nth-child(3) {
 background: var(--third-color);
 -webkit-animation-delay: -0.7s;
         animation-delay: -0.7s;
}

.loading span:nth-child(4) {
 background: var(--fourth-color);
 -webkit-animation-delay: -0.6s;
         animation-delay: -0.6s;
}

.loading span:nth-child(5) {
 background: var(--fifth-color);
 -webkit-animation-delay: -0.5s;
         animation-delay: -0.5s;
}

@-webkit-keyframes scale {
 0%, 40%, 100% {
  -webkit-transform: scaleY(0.05);
          transform: scaleY(0.05);
 }

 20% {
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
 }
}

@keyframes scale {
 0%, 40%, 100% {
  -webkit-transform: scaleY(0.05);
          transform: scaleY(0.05);
 }

 20% {
  -webkit-transform: scaleY(1);
          transform: scaleY(1);
 }
}

</style>