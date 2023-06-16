<script setup>
import FoodCard from "./FoodCard.vue";
import {useFoodItemsStore} from "../../stores/FoodItemsStore";

function addToCart() {
  console.log("Added to cart")
}

let foodItems = useFoodItemsStore();

let about = {
  title: "We Are Burger Queen",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All",
  image: "/src/assets/images/about-img.png"
}
</script>

<template>
  <!-- food section -->

  <section class="food_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>our food</h2>
      </div>

      <ul class="filters_menu">
        <li v-for="item in foodItems.foodList" :class="{'active':item === foodItems.activeItem}"
            data-filter="*" @click="foodItems.activeItem = item">{{ item }}
        </li>
      </ul>

      <div class="filters-content">
        <div class="row grid">
          <FoodCard
              :food-items="foodItems.categorized"/>
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