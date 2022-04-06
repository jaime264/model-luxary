<template>
  <div class="home"> 
    <Search/>
    <h2>¿Dónde encontrar las mejores Kinesiólogas en Perú?</h2>
    <masonry-wall :items="models" :ssr-columns="1" :column-width="288.48" :gap="10">
      <template #default="{ item }">
        <Card :model="item"/>
      </template>
    </masonry-wall>
  </div>  
</template>

<script>
import Card from "@/components/card.component.vue";
import Search from "@/components/search.component.vue";
import { mapActions } from 'vuex'

export default {
  name: "HomeView",
  components: {
    Card,
    Search
  },
  data(){
    return {
      models: [],
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

<style lang="scss" scoped>

  h2{
    color: white;
    font-size: 1.2em;
    line-height: 20px;
    padding: 5px;
    margin-bottom: 15px;
  }

</style>