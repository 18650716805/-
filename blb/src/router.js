import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Register from './views/register.vue'
import Search from './components/search.vue'
import location from './views/location.vue'
//二级路由
import HomeMainShow from "./components/homemainshow"
import CatsMainShow from "./components/catsmainshow"

//三级路由
import Recommend from './components/catslist/recommendforyou'
import Food from './components/catslist/food'
import Phone from './components/catslist/phone'
import Femensuit from './components/catslist/femensuit'
import Homesuit from './components/catslist/homesuit'
import Liveserve from './components/catslist/liveserve'
import Mansuit from './components/catslist/mansuit'
import Packge from './components/catslist/packge'
import { nextTick } from 'q';
Vue.use(Router)

 const router= new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'login', 
      component: Login

    },
   
    {
      path: '/home',
      name: 'home',
      component: Home,
    beforeEnter:(to,from,next)=>{
      
      var token=window.localStorage.token
      if(token){
        next()
      }else{next('/')}
      
    },
      redirect: "/home/homemainshow",
      children: [{
        path: '/home/homemainshow',
        component: HomeMainShow,

      }, {
        path: '/home/catsmainshow',
        component: CatsMainShow,
        
        redirect: "/home/catsmainshow/catslist/0",
        children: [{
          path: '/home/catsmainshow/catslist/0',
          component: Recommend
        }, {
          path: '/home/catsmainshow/catslist/6',
          component: Food
        }, {
          path: '/home/catsmainshow/catslist/1',
          component: Liveserve
        }, {
          path: '/home/catsmainshow/catslist/2',
          component: Mansuit
        }, {
          path: '/home/catsmainshow/catslist/3',
          component: Femensuit
        }, {
          path: '/home/catsmainshow/catslist/4',
          component: Packge
        }, {
          path: '/home/catsmainshow/catslist/5',
          component: Phone
        },
        {
          path: '/home/catsmainshow/catslist/7',
          component: Homesuit
        }],
       
      }, {
        path: '/location',
        name: 'location',
        component: location
  
      },]
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }, {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'*' ,
      redirect:"/home"
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    
    }
  ]
})

export default router
