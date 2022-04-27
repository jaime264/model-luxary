<template>
  <div id="app">
    <Header />
    <div class="main bg-gray-100">
      <HeaderAdm/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/header.component.vue"
import Footer from "@/components/footer.component.vue"
import HeaderAdm from "@/components/admin/header.component.vue"


export default {
  name: "admin",
  components: {
    Header,
    Footer,
    HeaderAdm
  },
};
</script>

<style>

</style>
