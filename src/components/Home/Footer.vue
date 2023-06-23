<script setup>

import {useFooterStore} from "../../stores/FooterStore";

const footer = useFooterStore();
</script>
<template>
  <footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-4 footer-col">
          <div class="footer_contact">
            <h4>
              Contact Us
            </h4>
            <div class="contact_link_box">

              <a v-for="contact in footer.contactLinks" :href="contact.link">
                <i :class="contact.icon" aria-hidden="true"></i>
                <span>
                  {{ contact.name }} {{ contact.description }}
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <div class="footer_detail">
            <a class="footer-logo" href="">
              Queen Burger
            </a>
            <p>
              Queen Burger is a restaurant located in Egypt, Cairo, Nasr City, 93 Ahmed Rashwan, we serve the best food
              in town.
            </p>
            <div class="footer_social">
              <a v-for="social in footer.socialLinks" :href="social.link">
                <i :class="social.icon" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4 footer-col">
          <h4>
            Opening Hours
          </h4>
          <p v-for="workingHour in footer.workingHours">
            {{ workingHour.day }} {{ workingHour.from }} - {{ workingHour.to }}
          </p>
        </div>
      </div>
      <div class="footer-info">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://github.com/AhmedRashwan" target="_blank">Ahmed Rashwan</a>

        </p>
      </div>
    </div>
  </footer>
</template>


<style scoped>

</style>