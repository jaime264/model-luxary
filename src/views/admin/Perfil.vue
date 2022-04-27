<template>
  <div>
    <div class="list-menu text-left text-white mx-3 mb-3">
      <span class="menu pl-8 uppercase"> <router-link to="/panel"> Menu </router-link>/ Perfil</span>
    </div>

    <div class="container mx-auto">
      <div class="flex flex-col sm:flex-row items-center sm:justify-center">
        <figure><img src="" alt="" /></figure>
        <button class="uppercase rounded-md px-5 py-1 mx-3">Cambiar Foto De Perfil</button>
      </div>

      <div class="pb-3">
        <form action="" class="grid grid-cols-1 lg:grid-cols-2">
          <div class="relative z-0 w-full mb-6 group text-left px-8">
            <input
              type="email"
              name="floating_email"
              class="input-perfil peer"
              placeholder=" "
              required
            />
            <label for="floating_email" class="label-perfil">Nombre *</label>
          </div>
          <div class="relative z-0 w-full mb-6 group text-left px-8">
            <input
              type="email"
              name="floating_email"
              class="input-perfil peer"
              placeholder=" "
              required
            />
            <label for="floating_email" class="label-perfil"
              >Correo Electronico *</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group text-left px-8">
            <input
              type="email"
              name="floating_email"
              class="input-perfil peer"
              placeholder=" "
              required
            />
            <label for="floating_email" class="label-perfil">Telefono *</label>
          </div>
          <div class="relative z-0 w-full mb-6 group text-left px-8">
            <input
              type="email"
              name="floating_email"
              class="input-perfil peer"
              placeholder=" "
              required
            />
            <label for="floating_email" class="label-perfil">Dirección *</label>
          </div>
          <div class="relative z-0 w-full mb-6 group text-left px-8">
            <input
              type="email"
              name="floating_email"
              class="input-perfil peer"
              placeholder=" "
              required
            />
            <label for="floating_email" class="label-perfil">Contraseña</label>
          </div>
          <div class="relative z-0 w-full mb-6 group text-left px-8">
            <input
              type="email"
              name="floating_email"
              class="input-perfil peer"
              placeholder=" "
              required
            />
            <label for="floating_email" class="label-perfil"
              >Confirmar Contraseña *</label
            >
          </div>
        </form>
        <div class="flex justify-end mr-8 ">
          <button class="w-32 h-10 rounded-md">Actualizar</button>
        </div>
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

figure img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.input-perfil {
  @apply block
  py-2.5
  px-0
  w-full
  text-sm text-gray-900
  bg-transparent
  border-0 border-b-2 border-gray-300
  appearance-none
  dark:text-white dark:border-gray-600 dark:focus:border-blue-500
  focus:outline-none focus:ring-0 focus:border-blue-600;
}

.label-perfil {
  @apply peer-focus:font-medium
  absolute
  text-sm text-gray-500
  dark:text-gray-400
  duration-300
  transform
  -translate-y-6
  scale-75
  top-3
  -z-10
  origin-[0]
  peer-focus:left-0
  peer-focus:text-blue-600
  peer-focus:dark:text-blue-500
  peer-placeholder-shown:scale-100
  peer-placeholder-shown:translate-y-0
  peer-focus:scale-75 peer-focus:-translate-y-6;
}

button {
  background: linear-gradient(90deg, #85288e 0%, #ea3a78 50%);
}
</style>