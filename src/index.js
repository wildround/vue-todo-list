/**
 * Vue.js entry point
 */
import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";

export default new Vue({
    el: "#app",
    store,
    template: "<App/>",
    components: { App }
});