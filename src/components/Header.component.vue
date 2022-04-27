<template>
  <div id="nav">
    <div class="container mx-auto">
      <nav class="flex items-center justify-between flex-wrap p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src="@/assets/images/as-logo2.png"
            alt=""
            class="width: max-content"
          />
        </div>
        <div class="block lg:hidden">
          <button
            @click="abrirMenu"
            class="
              flex
              items-center
              px-3
              py-2
              border
              rounded
              text-gray-400
              border-gray-400
              hover:text-white hover:border-white
            "
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          id="menuNav"
          class="
            w-full
            flex-grow
            lg:flex lg:items-center lg:w-auto lg:text-right
            hidden
          "
        >
          <div class="text-sm lg:flex-grow">
            <a
              href="/"
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                mr-4
                text-gray-400
                hover:text-white
                text-base
              "
            >
              Inicio
            </a>
            <a
              href="#responsive-header"
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                mr-4
                text-gray-400
                hover:text-white
                text-base
              "
            >
              Nosotros
            </a>
            <a
              href="#responsive-header"
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                text-gray-400
                hover:text-white
                text-base
              "
            >
              Contacto
            </a>
          </div>
          <div>
            <a
              href="/panel"
              class="
                inline-block
                px-4
                py-2
                leading-none
                border
                rounded
                text-gray-400
                border-gray-400
                hover:border-transparent
                mt-4
                w-full
                text-center
                lg:mt-0 lg:ml-6
                text-base
                hover:text-white 
                hover:border-white
              "
              >Login</a
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    abrirMenu() {
      console.log("click");
      document.getElementById("menuNav").classList.toggle("hidden");
    },
  },
};
</script>

<style lang="scss">
#nav {
  background: #111;
}
</style>