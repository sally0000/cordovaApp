import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import RealTime from "../views/RealTime/index.vue";
import RealTimeDetail from "../views/RealTime/indexDetails.vue";
import RealTimeSearch from "../views/RealTime/RealTimeSearch.vue";
import Monitor from "../views/Monitor.vue";
import Warning from "../views/Warning.vue";
import User from '../views/User.vue'
import About from '../views/About.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: "realTime",
    redirect: '/realTime'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      index: 1
    }
  },
  {
    path: "/realTime",
    name: "realTime",
    component: RealTime,
    meta: {
      index: 1
    }
  },  
  {
    path: "/realTime",
    name: "realTime",
    component: RealTime,
    meta: {
      index: 1
    }
  },   
  {
    path: '/realTime-search',
    name: 'realTime-search',
    meta: {
      index: 2
    },
    component: RealTimeSearch,
  }, 
  {
    path: '/realTime-detail/:id',
    name: 'realTime-detail/:id',
    meta: {
      index: 3
    },
    component: RealTimeDetail,
  },
  {
    path: '/monitor',
    name: 'monitor', 
    component: Monitor,
    meta: {
      index: 1
    }
  },
  {
    path: '/warning',
    name: 'warning', 
    component: Warning,
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    name: 'user', 
    component: User,
    meta: {
      index: 1
    }
  },
  {
    path: "/about",
    name: "about",
    component: About, 
    meta: {
      index: 2
    }
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
