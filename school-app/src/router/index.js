import { createRouter, createWebHashHistory } from 'vue-router'
import RealTime from "../views/RealTime.vue";
import Monitor from "../views/Monitor.vue";
import Warning from "../views/Warning.vue";
import User from '../views/User.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes : [
    {
      path: '/',
      redirect: '/realTime'
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
  ]
});
  
export default router;
