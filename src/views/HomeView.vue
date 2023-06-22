<script setup>
import OfferCard from "../components/Home/OfferCard.vue";
import FoodSection from "../components/Home/FoodSection.vue";
import BookTable from "../components/Home/BookTable.vue";
import Footer from "../components/Home/Footer.vue";
import HomeSlider from "../components/Home/Slider.vue";</script>

<template>
  <div class="hero_area">
    <div class="bg-box">
      <img alt="main burger background" src="@/assets/images/hero-bg.jpg">
    </div>
    <HomeSlider/>
  </div>
  <OfferCard/>
  <FoodSection/>
  <BookTable/>
  <!--  TODO:: NEED TO REVISIT<Testimonial/> -->
  <Footer/>
</template>
