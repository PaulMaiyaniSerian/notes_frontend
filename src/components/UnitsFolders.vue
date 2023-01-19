<template>
         <div
        class="unit_cont_wrapper"
        v-for="unit in units"
        :key="unit.id"
      >
        <a @click.prevent="redirectToUnitDocuments(unit.id)">
          <div class="unit_title">
            {{ unit.name }}
          </div>
          <div class="unit_icon">
            <i class="fa-solid fa-up-right-from-square"></i>
          </div>
        </a>
      </div>
</template>