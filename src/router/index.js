const routes = [
    {
        path: '/',
        name: 'home',
        //component: Home
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  
      },
]

export default routes