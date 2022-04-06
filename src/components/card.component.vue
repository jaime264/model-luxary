<template >
  <div class="card-model" @click="goTo(model.id_ads)">
    <img width="290" :src="'https://api.luxarymodels.com/public/images/models/'+model.photo1">
    <span>{{model.username}}</span>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["model"],
  data() {
    return {
     
    };
  },
  methods: {
    goTo(id){
      this.$router.push(`/modelo/${id}`)
    }
  },
};
</script>

<style lang="scss">
.card-model{
  display: flex;
  flex-direction: column;
  span{
      color: white;
  }
}
</style>