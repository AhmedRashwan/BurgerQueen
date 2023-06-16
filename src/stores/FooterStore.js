import {defineStore} from "pinia";
import {reactive} from "vue";

export const useFooterStore = defineStore('footer', () => {
    const contactLinks = reactive([{
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
    }]);

    const socialLinks = reactive([
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
        }]);
    const workingHours = reactive([{
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
    ]);
    return {socialLinks, contactLinks, workingHours}
});