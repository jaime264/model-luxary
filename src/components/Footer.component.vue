<template>
  <div id="footer">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-3">
        <div class="p-8 lg:p-12">
          <img src="@/assets/images/as-logo2.png" alt="" />
          <p class="text-gray-400 text-justify p-1.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas animi
            ab, vero, nihil quo suscipit consequuntur id minima? Quaerat
            similique dolorum reiciendis enim.
          </p>
        </div>

        <div class="p-8 lg:p-12 gap-1">
          <h2 class="text-white text-2xl">Categories</h2>
          <hr class="p-1.5 border-gray-400">

          <span class="block text-gray-400 text-base ">Black Hair (8)</span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">VIP (7)</span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">Blonde (4)</span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">Brunette (2)</span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">Red Hair (1)</span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">Alt Color (1)</span>
    

        </div>

        <div class="p-8 lg:p-12">
          <h2 class="text-white text-2xl">Navigation</h2>
          <hr class="p-1.5 border-gray-400">

          <span class="block text-gray-400 text-base"><router-link to="/">Inicio</router-link></span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">Nosotros</span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">Contacto</span>
          <hr class="p-1 border-gray-400">
          <span class="block text-gray-400 text-base">Login</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#footer {
  background: #111;
}
</style>