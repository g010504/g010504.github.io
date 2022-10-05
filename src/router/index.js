import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import homePage from '../pages/homepage/homePage'
import gridDetail from '../pages/homepage/gridDetail'
import store from '../pages/store/store'
import collect from '../pages/collect/collect'
import information from '../pages/information/information'
import picture from '../pages/picture/picture'
import indent from '../pages/indent/indent'
import allindent from '../pages/indent/indentChild/allindent'
import indenting from '../pages/indent/indentChild/indenting'
import indented from '../pages/indent/indentChild/indented'
import cart from '../pages/cart/cart'
import accounts from '../pages/accounts/accounts'
import login from '../pages/login/login'
import personAge from '../pages/personal/personAge'
import message from '../pages/personal/message'
import set from '../pages/personal/set'
import shopDetail from '../pages/shopDetail/shopDetail'
import paysuccess from '../pages/paysuccess/paysuccess'
import payfailed from '../pages/payfailed/payfailed'
import paypage from '../pages/paypage/paypage'


import cookies from '../utils/cookies'


const router = new VueRouter({
    linkExactActiveClass: 'active',
    routes:[
        {
            path: '/',
            redirect: '/homePage',
        },
        {
            path: '/homePage',
            component: homePage,
            children: [
                {
                    path: '/homePage/gridDetail',
                    component: gridDetail,
                },
                {
                    path: '/',
                    redirect: '/homePage/gridDetail'
                }
            ]
        },
        {
            path:'/store',
            component:store
        },
        {
            path:'/shopDetail',
            component:shopDetail
        },
        {
            path:'/collect',
            component:collect,
            meta:{
                isLogin:true//false的值表示不需要经过登录页面也可以访问，true表示需要经过登录页面才能访问
            },
        },
        {
            path:'/information',
            component:information
        },
        {
            path:'/picture',
            component:picture
        },
        {
            path:'/indent',
            component:indent,
            meta:{
                isLogin:true
            },
            children: [
                {
                    path: '/indent/allindent',
                    component: allindent,
                },
                
                {
                    path: '/indent/indenting',
                    component: indenting,
                },
                {
                    path: '/indent/indented',
                    component: indented,
                },
                {
                    path: '/',
                    redirect: '/indent/allindent'
                },
            ]
        },
        {
            path:'/cart',
            component:cart,
            meta:{
                isLogin:true
            },
        },
        {
            path:'/accounts',
            component:accounts,
            meta:{
                isLogin:true
            },
        },
        {
            path:'/login',
            component:login
        },
        {
            path: '/personAge',
            component: personAge,
            meta:{
                isLogin:true
            },
            children: [
                {
                    path: '/personAge/message',
                    component: message
                }, 
                {
                    path: '/personAge/set',
                    component: set
                },
                {
                    path: '/',
                    redirect: '/personAge/message'
                },
            ]
        },
        {
            path:'/paysuccess',
            component:paysuccess,
            meta:{
                isLogin:true
            },
        },
        {
            path:'/payfailed',
            component:payfailed,
            meta:{
                isLogin:true
            },
        },
        {
            path:'/paypage',
            component:paypage,
            meta:{
                isLogin:true
            },
        },
    ]
})

//路由导航守卫：页面跳转之前先验证
router.beforeEach((to,from,next)=>{
    //to：到哪里去的路由地址
    //from：从哪里来的路由地址
    //next：放行或跳转到下一个页面
    //判断cookies里面token是否有值，如果没有，表示没有经过登录页面，不放行，如果有，则放行
    if(to.meta.isLogin){
        if(cookies.getCookie("TOKEN")){
            next()
        }else{
            next("/login")
        }
    }else{
        next()
    }
})
export default router