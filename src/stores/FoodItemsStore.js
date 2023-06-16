import {defineStore} from "pinia"
import {computed, reactive, ref} from "vue";

export const useFoodItemsStore = defineStore('foodItems', () => {
    const activeItem = ref('all')
    const items = reactive([{
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