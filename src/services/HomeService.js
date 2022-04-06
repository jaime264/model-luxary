import $axios from "@/plugins/axios.client"; 
export default {
    getHome: () => {
        return $axios.get(`/getmodels/1`)
    }
}