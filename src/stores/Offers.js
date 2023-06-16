import {defineStore} from "pinia"
import {reactive} from "vue";

export const useOfferStore = defineStore('offer', () => {
    const offers = reactive([
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
        }])

    function addOffer(offer) {
        offer.push(offer);
    }

    function getOffers() {
        return offers;
    }

    return {offers, addOffer, getOffers}
})

