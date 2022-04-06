import { createStore } from "vuex";

import home from './modules/home.store'
import model from './modules/model.store'

const store = createStore({
    modules: {
      home,
      model
    },
});

export default store 