<template>
  <div>
    <div class="list-menu text-left text-white mx-3 mb-3">
      <span class="menu pl-8 uppercase"><router-link to="/panel"> Menu </router-link> / Publicaciones</span>
    </div>
    <div></div>
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