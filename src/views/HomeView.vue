<script setup>
import HomeSlider from "../components/Home/Slider.vue";
import OfferCard from "../components/Home/OfferCard.vue";
import FoodSection from "../components/Home/FoodSection.vue";
import BookTable from "../components/Home/BookTable.vue";
import Footer from "../components/Home/Footer.vue";</script>

<template>
  <teleport to=".hero_area">
    <HomeSlider/>
  </teleport>
  <OfferCard/>
  <FoodSection/>
  <BookTable/>
  <!--  TODO:: NEED TO REVISIT<Testimonial/> -->
  <Footer/>
</template>
