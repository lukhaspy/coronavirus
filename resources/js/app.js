/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

require("bootstrap-css-only/css/bootstrap.min.css");
require("mdbvue/lib/css/mdb.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");

import Vue from "vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

import App from "./views/App.vue";
import Paraguay from "./views/Paraguay.vue";
import Sobre from "./views/Sobre.vue";
import Home from "./views/Home.vue";
import * as mdbvue from "mdbvue";
for (const component in mdbvue) {
    Vue.component(component, mdbvue[component]);
}
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/paraguay",
            name: "paraguay",
            component: Paraguay
        },
        {
            path: "/sobre",
            name: "sobre",
            component: Sobre
        }
    ]
});

const app = new Vue({
    el: "#app",
    components: { App },
    router
});
