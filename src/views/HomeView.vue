<script setup>
import HomeSlider from "../components/Home/Slider.vue";
import OfferCard from "../components/Home/OfferCard.vue";
import FoodSection from "../components/Home/FoodSection.vue";
import BookTable from "../components/Home/BookTable.vue";
import Footer from "../components/Home/Footer.vue";

let offers = [
  {
    image: "/src/assets/images/o1.jpg",
    details: "offer 1",
    link: "https://www.google.com",
    percentage: 20
  },
  {
    image: "src/assets/images/o2.jpg",
    details: "offer 2",
    link: "https://www.google.com",
    percentage: 30
  },
  {
    image: "src/assets/images/o2.jpg",
    details: "offer 3",
    link: "https://www.google.com",
    percentage: 40
  }, {
    image: "src/assets/images/o2.jpg",
    details: "offer 4",
    link: "https://www.google.com",
    percentage: 30
  }]

let foodList = [
  "all",
  "Burger",
  "Pizza",
  "Pasta",
  "Fries"
]
let foodCards = [{
  name: "Amazing Pizza",
  type: "Pizza",
  image: "src/assets/images/f1.png",
  description: "Amzaing Pizza Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
  price: 2,
}, {
  name: "Delicious Pasta",
  type: "Burger",
  image: "src/assets/images/f2.png",
  description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
  price: 2
}, {
  name: "hot Pizza",
  type: "Pizza",
  image: "src/assets/images/f3.png",
  description: "Hot Pizza Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
  price: 2
}, {
  name: "Delicious Pasta",
  type: "Pasta",
  image: "src/assets/images/f4.png",
  description: "Delicious Pasta Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque ",
  price: 2
},
  {
    name: "hot Fries",
    type: "Fries",
    image: "src/assets/images/f5.png",
    description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 2
  },
  {
    name: "hot Pizza",
    type: "Pizza",
    image: "src/assets/images/f6.png",
    description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: 2
  }
]
let foodSection = "our food"
let about = {
  title: "We Are Burger Queen",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All",
  image: "/src/assets/images/about-img.png"
}

let contactLinks = [{
  name: "",
  description: "93 Ahmed Rashwan",
  link: "",
  icon: "fa fa-map-marker"
}, {
  name: "",
  description: "+201026569378",
  link: "",
  icon: "fa fa-phone"
}, {
  name: "",
  description: "Ahmed.Rashwan2014@yahoo.com",
  link: "",
  icon: "fa fa-envelope"
}];

let socialLinks = [
  {
    name: "facebook",
    icon: "fa fa-facebook",
    link: ""
  },
  {
    name: "twitter",
    icon: "fa fa-twitter",
    link: ""
  }, {
    name: "instagram",
    icon: "fa fa-instagram",
    link: ""
  },
  {
    name: "Linkedin",
    icon: "fa fa-linkedin",
    link: ""
  }];
let workingHours = [{
  day: "Saturday",
  from: "12 AM",
  to: "12 PM"
}, {
  day: "Monday",
  from: "12 AM",
  to: "5 PM"
}, {
  day: "Tuesday",
  from: "12 AM",
  to: "5 PM"
}
];
</script>

<template>
  <teleport to=".hero_area">
    <HomeSlider/>
  </teleport>
  <OfferCard :offers="offers"/>
  <FoodSection :food-cards="foodCards" :food-list="foodList" :section-title="foodSection"/>
  <BookTable/>
  <!--  TODO:: NEED TO REVISIT<Testimonial/> -->
  <Footer :contact-links="contactLinks" :social-links="socialLinks" :working-hours="workingHours"/>
</template>
