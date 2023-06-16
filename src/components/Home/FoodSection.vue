<script setup>
import {ref} from "vue"
import FoodCard from "./FoodCard.vue";

let props = defineProps({
  sectionTitle: String,
  foodList: Array,
  foodCards: Array
})
let activeList = ref("all")

function addToCart() {
  console.log("Added to cart")
}

</script>

<template>
  <!-- food section -->

  <section class="food_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          {{ sectionTitle }}
        </h2>
      </div>

      <ul class="filters_menu">
        <li v-for="item in props.foodList" :class="{'active':item === activeList}"
            data-filter="*" @click="activeList = item">{{ item }}
        </li>
      </ul>

      <div class="filters-content">
        <div class="row grid">
          <FoodCard :food-cards="props.foodCards.filter((card)=>card.type === activeList || activeList === 'all')"/>
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          View More
        </a>
      </div>
    </div>
  </section>

  <!-- end food section -->
</template>


<style scoped>

</style>