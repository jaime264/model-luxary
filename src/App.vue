<template>
  <div class="app">
    <HeaderComponent/>
    <div class="main">
      <router-view/>
    </div>
    <footer>
    <FooterComponent />
    </footer>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header.component.vue'
import FooterComponent from '@/components/Footer.component.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
@import '@/assets/scss/style.scss';
.app{

}
.main{
  width: 100%;
  background: #1a1a1a;
}
</style>