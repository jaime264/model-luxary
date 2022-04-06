import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import MasonryWall from '@yeger/vue-masonry-wall'

const app = createApp(App)

app.use(store).use(router).use(MasonryWall).mount('#app')
