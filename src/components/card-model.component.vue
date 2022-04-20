<template>
  <div class="flex justify-center m-2">
    <div class="rounded-lg shadow-lg bg-white max-w-sm">
      <a href="#!">
        <img class="" :src="modelo.image" alt="" />
      </a>
      <div class="p-1.5 bg-neutral-600">
        <h5 class="text-white text-xl font-medium mb-2 uppercase">{{modelo.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        modelo:{
            name:String,
            image:String
        }
    }
};
</script>

<style>
</style>