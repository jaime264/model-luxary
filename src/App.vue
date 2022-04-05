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
  padding: 50px;
  background: url(https://luxarymodels.com/assets/images/pad.png) 0px 0px repeat fixed rgba(0, 0, 0, 0);
}
</style>