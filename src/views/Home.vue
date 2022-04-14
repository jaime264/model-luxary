<template>
  <div class="home"> 
    <Search/>
    <div class="black">
    <h2>¿Dónde encontrar las mejores Kinesiólogas en Perú?</h2>
    <masonry-wall :items="models" :ssr-columns="1" :column-width="288.48" :gap="10">
      <template #default="{ item }">
        <Card :model="item"/>
      </template>
    </masonry-wall>
    </div>
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
.home{
  background: url(https://luxarymodels.com/assets/images/pad.png) 0px 0px repeat fixed rgba(0, 0, 0, 0);
  width: 100%;
  padding: 50px;
  .black{
    background: black;
  }
  h2{
    color: white;
    font-size: 1.2em;
    line-height: 20px;
    padding: 5px;
    margin-bottom: 15px;
  }

}
  
</style>