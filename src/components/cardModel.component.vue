<template>
  <div class="flex justify-center sm:m-2  lg:m-1">
    <div class="rounded-lg shadow-lg bg-white max-w-sm ">
      <a href="#!">
        <img class="" :src="letterIcon(modelo.image)" alt="" />
      </a>
      <div class="p-1.5 bg-neutral-600 hover:bg-yellow-700">
        <h5 class="text-white text-xl font-medium mb-2 uppercase">
          {{ modelo.name }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelo: {
      name: String,
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

<style>
</style>