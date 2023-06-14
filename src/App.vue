<script setup>


import {RouterView} from 'vue-router'
import TheHeader from "./components/TheHeader.vue";</script>

<template>
  <div class="hero_area">
    <div class="bg-box">
      <img alt="main burger background" src="@/assets/images/hero-bg.jpg">
    </div>
    <TheHeader/>
  </div>
  <RouterView/>
</template>

<style scoped>
</style>
