<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 px-7 pb-7 pt-2">
    <button class="box border-2 mb-1 mr-3 sm:ml-3 rounded-xl">
      <router-link to="/perfil">
        <div class="py-7">
          <div class="flex justify-center pb-4 pt-2">
            <img src="@/assets/images/panel/usvgray.svg" alt="" />
          </div>
          <h3 class="pb-2">Mi Perfil</h3>
        </div>
      </router-link>
    </button>
    <button class="box border-2 mb-1 ml-3 sm:mr-3 rounded-xl">
      <router-link to="/publicacion">
        <div class="py-7">
          <div class="flex justify-center pb-4 pt-2">
            <img src="@/assets/images/panel/create_black_24dp.svg" alt="" />
          </div>
          <h3>Publicaciones</h3>
        </div>
      </router-link>
    </button>
    <button class="box border-2 mb-1 mr-3 sm:ml-3 rounded-xl">
      <router-link to="/notificacion">
        <div class="py-7">
          <div class="flex justify-center pb-4 pt-2">
            <img
              src="@/assets/images/panel/notifications_none_black_24dp.svg"
              alt=""
            />
          </div>
          <h3>Notificaciones</h3>
        </div>
      </router-link>
    </button>
    <button class="box border-2 mb-1 ml-3 sm:mr-3 rounded-xl">
      <router-link to="/">
        <div class="py-7">
          <div class="flex justify-center pb-4 pt-2">
            <img src="@/assets/images/panel/log-off-svgrepo-com.svg" alt="" />
          </div>
          <h3>Salir</h3>
        </div>
      </router-link>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  margin-bottom: 10px;
}
img {
  width: 25%;
  background: linear-gradient(90deg, #85288e 0%, #ea3a78 50%);
  border-radius: 50%;
}
.box {
  box-shadow: 0 2px 4px -1px #0003, 0 4px 5px #00000024, 0 1px 10px #0000001f;
}
</style>