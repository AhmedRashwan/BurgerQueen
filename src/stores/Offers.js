import {defineStore} from "pinia"
import {reactive} from "vue";

import offer1 from "../assets/images/o1.jpg";
import offer2 from "../assets/images/o2.jpg";

export const useOfferStore = defineStore('offer', () => {
    const offers = reactive([
        {
            image: offer1,
            details: "offer 1",
            link: "https://www.google.com",
            percentage: 10
        },
        {
            image: offer2,
            details: "offer 2",
            link: "https://www.google.com",
            percentage: 20
        },
        {
            image: offer2,
            details: "offer 3",
            link: "https://www.google.com",
            percentage: 30
        }, {
            image: offer1,
            details: "offer 4",
            link: "https://www.google.com",
            percentage: 40
        }])

    function addOffer(offer) {
        offer.push(offer);
    }

    function getOffers() {
        return offers;
    }

    return {offers, addOffer, getOffers}
})

