<script setup>
import {reactive} from "vue";
import aboutImage from "@/assets/images/about-img.png";

let about = reactive({
  title: "About Us",
  description: "This restaurant is a place where you can enjoy your meal with your family and friends. We have a wide range of dishes to choose from. We also have a bar where you can enjoy your favorite drinks. We have a wide range of dishes to choose from. We also have a bar where you can enjoy your favorite drinks.",
  image: aboutImage
});
</script>
<template>

  <!-- about section -->
  <section class="about_section layout_padding">
    <div class="container ">

      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img :alt="about.title" :src="about.image">
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                {{ about.title }}
              </h2>
            </div>
            <p>
              {{ about.description }}
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <p style="text-align: center">Made by Love, ½ teaspoon ground black pepper and 1 pound ground beef</p>
  <!-- end about section -->
</template>


<style scoped>

</style>