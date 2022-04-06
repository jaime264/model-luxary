import HomeService from '@/services/HomeService'

const home = {
    namespaced: true,
    state: () => ({
        counter: 0
    }),
    mutations: {
        
    },
    actions: {
        async getHome({ commit }) {
            return await HomeService.getHome();
        },
        async getModelById({ commit }, data) {
            return await HomeService.getModelById(data)
        }
    },
    getters: {

    }
}
export default home 