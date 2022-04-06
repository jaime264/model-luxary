<template >
  <div class="card-model" @click="goTo(model.id_ads)">
    <img class="photo" width="290" :src="'https://api.luxarymodels.com/public/images/models/'+model.photo1">
    <span class="pais"><img
        class="pais-img"
        :src="require(`@/assets/images/` + model.flag + `.svg`)"
        alt=""
      /> {{model.username}}, {{model.age}} años.</span>
    <span class="location"><img
        class="location-img"
        src="@/assets/images/location.svg"
        alt=""
      />{{model.district}}, {{model.address}}</span>
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
.card-model {
  display: flex;
  flex-direction: column;
  
  .photo{
      margin-bottom: 5px;
  }

  .pais {
    font-size: 14px;
    &-img {
      height: 22.7px;
      width: 22.7px;
      margin-right: 5px;
    }
  }

  .location {
    font-size: 12px;
    &-img {
      height: 15px;
      width: 15px;
      margin-right: 5px;
    }
  }

  span {
    color: white;
  }
}
</style>