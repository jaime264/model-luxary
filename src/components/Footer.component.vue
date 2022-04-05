<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xs-12 ciudades">
        <h4>Ciudades principales de Perú</h4>
        <div>
          <div><a href="">Lima Metropolitana</a></div>
          <div><a href="">Arequipa</a></div>
          <div><a href="">Trujillo</a></div>
        </div>
      </div>

      <div class="col-md-4 col-lg-4 col-xs-6 metodos-pago">
        <h4>Métodos de pago</h4>
        <div>
          <img src="@/assets/images/pagovisa.png" alt="" />
          <img src="@/assets/images/pagovisaelectron.png" alt="" />
          <img src="@/assets/images/pagomastercard.png" alt="" />
          <img src="@/assets/images/pagomaestrocard.png" alt="" />
        </div>
      </div>

      <div class="col-md-3 col-lg-3 col-xs-6 redes">
        <h4>Redes Sociales</h4>
        <div>
          <a href=""><img src="@/assets/images/twitter.svg" alt="" /></a>
          <a href=""><img src="@/assets/images/telegram.svg" alt="" /></a>
          <a href=""><img src="@/assets/images/instagram.svg" alt="" /></a>
        </div>
      </div>

      <div class="col-md-5 col-lg-5 col-xs-12 enlaces">
        <h4>Enlaces</h4>
        <div>
          <a href=""><img src="@/assets/images/120x90.jpg" alt="" /></a>
          <a href=""><img src="@/assets/images/escortlinks-1.jpg" alt="" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #1a1a1a;
  display: flex !important;
  justify-content: center;
  padding: 15px;
}

.ciudades {
  padding: 20px;
  div {
    display: flex;
  }
  div a {
    color: #fff;
    margin-right: 15px;
    padding: 0 5px;

    background: #e43875;
    border-radius: 5px;
  }
}

.metodos-pago {
  padding: 20px;
  h4 {
    padding-bottom: 10px;
  }
  div img {
    height: 30px;
    width: 48px;
  }
}

.redes {
  padding: 20px;
  h4 {
    padding-bottom: 10px;
  }
  div img {
    height: 25px;
    width: 25px;
  }
}

.enlaces {
  padding: 20px;
  h4 {
    padding-bottom: 10px;
  }
  div img {
    height: 60px;
    width: 80px;
  }
}

h4 {
  color: #fff;
}
</style>