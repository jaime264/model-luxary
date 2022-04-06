import ModelService from '@/services/ModelService'

const model = {
    namespaced: true,
    state: () => ({
        counter: 0
    }),
    mutations: {
        
    },
    actions: {
        async getModelById({ commit }, data) {
            return await ModelService.getModelById(data)
        }
    },
    getters: {

    }
}
export default model 