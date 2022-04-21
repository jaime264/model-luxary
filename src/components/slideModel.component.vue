<template>
  <div class="flex flex-shrink-0 relative w-full sm:w-auto text-center">
    <img
      :src="letterIcon(modelo.image)"
      alt="sitting area"
      class="object-cover object-center w-full"
    />    
  </div>
</template>

<script>
export default {
  props: {
    modelo: {
      image: String,
    },
  },
  methods: {
    letterIcon: function (path) {
      return require("@/" + path);
    },
  },
};
</script>

<style scoped>
img {
  width: 382px;
}
</style>