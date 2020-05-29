import Vue from 'vue'
import Router from 'vue-router'

import  LoginComponent from '../views/Login/login.vue'
import  HomeComponent from '../views/Home/home.vue'
Vue.use(Router)
var router = new Router({

    routes: [
        {
            path:"/login",
            name:"login",
            component:LoginComponent
        },
        {
            path:"/",
            name:"home",
            component:HomeComponent
            
        }
    ]
})


export default router