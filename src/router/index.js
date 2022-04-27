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
  {
    path: '/perfil',
    name: 'perfil',
    meta: {
      layout: 'admin'
    },
    component: () => import(/* webpackChunkName: "perfil" */ '../views/admin/Perfil.vue')
  },
  {
    path: '/tablero',
    name: 'tablero',
    meta: {
      layout: 'admin'
    },
    component: () => import(/* webpackChunkName: "tablero" */ '../views/admin/Tablero.vue')
  },
  {
    path: '/notificacion',
    name: 'notificacion',
    meta: {
      layout: 'admin'
    },
    component: () => import(/* webpackChunkName: "notificacion" */ '../views/admin/Notificacion.vue')
  },
  {
    path: '/publicacion',
    name: 'publicacion',
    meta: {
      layout: 'admin'
    },
    component: () => import(/* webpackChunkName: "publicacion" */ '../views/admin/Publicacion.vue')
  },
  {
    path: '/panel',
    name: 'panel',
    meta: {
      layout: 'admin'
    },
    component: () => import(/* webpackChunkName: "panel" */ '../views/admin/Panel.vue')
  },
]

export default routes