import $axios from "@/plugins/axios.client"; 
export default {
    getModelById: (data) => {
        return  $axios.get(`/auth/infomodel/${data.id}`)
    }
}