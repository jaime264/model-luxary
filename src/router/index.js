const routes = [
  {
    path: '/',
    name: 'home',
    //component: Home
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/modelo',
    name: 'model',
    //component: Home
    component: () => import(/* webpackChunkName: "model" */ '../views/Model.vue')
  },
  {
    path: '/prueba',
    name: 'prueba',
    //component: Home
    component: () => import(/* webpackChunkName: "prueba" */ '../views/prueba.vue')
  },
]

export default routes