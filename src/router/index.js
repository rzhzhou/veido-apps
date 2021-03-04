import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Login from '@/pages/Login/login'
import Home from '@/pages/veidos/home/index'
import Movie from '@/pages/veidos/movie/index'
import Play from '@/pages/veidos/veidoplay/index'



Vue.use(Router)


const router = new Router({
  routes: [
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
      	title: '主页'
      }
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      component: Movie,
      meta: {
        isLogin: false
      }
    },
    {
      path: '/play',
      name: 'Play',
      component: Play,
    },
  ],
  mode:"history"
})


// // 导航守卫
// // 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = localStorage.getItem('Authorization');
 
//     if (token === null || token === '') {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });

// export default router;