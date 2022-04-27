<template>
  <div>
    <div class="list-menu text-left text-white mx-3 mb-3">
      <span class="menu pl-8 uppercase"><router-link to="/panel"> Menu </router-link> / Notificaciones</span>
    </div>
    <div class="container mx-auto">

      <div class="flex justify-around pt-8">
        <div class="border-2 rounded-2xl bg-stone-300"><button class="text-sm uppercase px-6 py-2 ">Actualizar</button></div>
        <div class="border-2 rounded-2xl bg-stone-300"><button class="text-sm uppercase px-6 py-2">Limpiar Historial</button></div>
      </div>
      <div class="flex flex-col py-12">
        <figure class="flex justify-center pb-6"><img src="@/assets/images/panel/campana.svg" class="w-1/5" alt=""></figure>
        <span class="text-2xl sm:text-3xl">¡ Aún no tienes notificaciones !</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
.list-menu {
  background: linear-gradient(90deg, #85288e 0%, #ea3a78 50%);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .menu {
    word-spacing: 1.5rem;
  }
}


</style>