<template>
  <div class="card-home">
    <img width="290" :src="'https://api.luxarymodels.com/public/images/models/'+model.photo1">
    <router-link :to="'/modelo/'+model.id_ads">{{model.username}}</router-link>
  </div>
</template>

<script>

export default {
  name: "Card",
  props: ['model'],
  methods: {

  },
};
</script>