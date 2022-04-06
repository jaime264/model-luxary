<template>
  <div class="home">
    <Card v-for="(model,$index) in models" :key="$index" :model="model"/>
  </div>
</template>

<script>
import Card from "@/components/card.component.vue";
import { mapActions } from 'vuex'

export default {
  name: "HomeView",
  components: {
    Card,
  },
  data(){
    return {
      models: []
    }
  },
  methods: {
    ...mapActions("home",['getHome']),
    async getHomeService(){
      try{
        let res = await this.getHome()
        if(res.status == 200){
          this.models = res.data.models
        }
      } catch (e){
        console.log("error => ",e)
      }
    }
  },
  mounted(){
    this.getHomeService()
  }
};
</script>
