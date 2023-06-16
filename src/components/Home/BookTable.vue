<script setup>
import {ref} from "vue";

const name = ref("")
const phone = ref("")
const email = ref("")
const persons = ref("")
const date = ref("")

function bookTable(e) {
  console.log(name.value)
  console.log(phone.value)
  console.log(email.value)
  console.log(persons.value)
  console.log(date.value)
}
</script>
<template>
  <!-- book section -->
  <section class="book_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Book A Table
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <form action="" @submit.prevent="bookTable">
              <div>
                <input v-model="name" class="form-control" placeholder="Your Name" type="text"/>
              </div>
              <div>
                <input v-model="phone" class="form-control" placeholder="Phone Number" type="text"/>
              </div>
              <div>
                <input v-model="email" class="form-control" placeholder="Your Email" type="email"/>
              </div>
              <div>
                <select v-model="persons" class="form-control nice-select wide">
                  <option disabled selected value="">
                    How many persons?
                  </option>
                  <option v-for='num in [1,2,3,4,5]' :key="num" :value="num">
                    {{ num }}
                  </option>

                </select>
              </div>
              <div>
                <input v-model="date" class="form-control" type="date">
              </div>
              <div class="btn_box">
                <button>
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <div class="map_container ">
            <div id="googleMap"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end book section -->
</template>


<style scoped>

</style>