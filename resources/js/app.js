/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./views/App.vue";
import Paraguay from "./views/Paraguay.vue";
import Mundo from "./views/Mundo.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "app",
            component: App
        },
        {
            path: "/paraguay",
            name: "paraguay",
            component: Paraguay
        },
        {
            path: "/mundo",
            name: "mundo",
            component: Mundo
        }
    ]
});

const app = new Vue({
    el: "#app",
    components: { App },
    router
});
