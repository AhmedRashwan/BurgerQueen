import {defineStore} from "pinia"
import {computed, reactive, ref} from "vue";
import foodImage1 from "../assets/images/f1.png";
import foodImage2 from "../assets/images/f2.png";
import foodImage3 from "../assets/images/f3.png";
import foodImage4 from "../assets/images/f4.png";
import foodImage5 from "../assets/images/f5.png";
import foodImage6 from "../assets/images/f6.png";
import foodImage7 from "../assets/images/f7.png";
import foodImage8 from "../assets/images/f8.png";
import foodImage9 from "../assets/images/f9.png";


export const useFoodItemsStore = defineStore('foodItems', () => {
    const activeItem = ref('all')
    const items = reactive([{
        name: "Amazing Pizza",
        type: "Pizza",
        image: foodImage1,
        description: "Amzaing Pizza Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 10,
    }, {
        name: "Delicious Burger",
        type: "Burger",
        image: foodImage2,
        description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 14
    }, {
        name: "hot Pizza",
        type: "Pizza",
        image: foodImage3,
        description: "Hot Pizza Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
        price: 7
    }, {
        name: "Delicious Pasta",
        type: "Pasta",
        image: foodImage4,
        description: "Delicious Pasta Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque ",
        price: 13
    },
        {
            name: "hot Fries",
            type: "Fries",
            image: foodImage5,
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: 9
        },
        {
            name: "hot Pizza",
            type: "Pizza",
            image: foodImage6,
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: 11
        },
        {
            name: "Delicious Pasta",
            type: "Burger",
            image: foodImage7,
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: 5
        },
        {
            name: "Delicious Pasta",
            type: "Burger",
            image: foodImage8,
            description: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
            price: 5
        },
        {
            name: "Delicious Pasta",
            type: "Pasta",
            image: foodImage9,
            description: "Delicious Pasta Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque ",
            price: 6
        }
    ]);
    const categorized = computed(() => {
        return items.filter((item) => item.type === activeItem.value || activeItem.value === "all")
    })
    const foodList = computed(() => {
        return ['all', ...new Set(items.map((item) => item.type))]
    })

    function getItems() {
        return items;
    }

    function addItem(item) {
        items.push(item);
    }

    return {activeItem, items, categorized, foodList, getItems, addItem}
})