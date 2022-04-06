<template>
  <div class="card-home">
    <img width="700" :src="'https://api.luxarymodels.com/public/images/models/'+model.photo1">
    <span>{{model.username}}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ModelById",
  data(){
    return {
      model: {}
    }
  },
  methods: {
    ...mapActions("model",['getModelById']),
    async getModelByIdService(){
      try{
        let json = {
            id: this.$route.params.id
        }
        let res = await this.getModelById(json)
        this.model = res.data[0]
      } catch (e){
        console.log("error => ",e)
      }
    }
  },
  mounted(){
    this.getModelByIdService()
  }
};
</script>

<style lang="scss" scoped>
  img{
    width: 100%;
    max-width: 540px;
  }
</style>
