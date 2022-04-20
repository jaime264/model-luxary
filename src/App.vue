<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header.component.vue"
import Footer from "@/components/footer.component.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
.main {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #111 !important;
  min-height: 100vh;
}
</style>
