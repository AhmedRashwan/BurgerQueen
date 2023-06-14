<template>
  <!-- about section -->

  <section class="about_section layout_padding">
    <div class="container  ">

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

  <!-- end about section -->
</template>

<script setup>
defineProps({
  about: Object
})
</script>

<style scoped>

</style>