<template>
  <div class="model-resume row">
    <div class="col-6 col-md-4 pd-50">
      <div class="black">
        <div class="center-img">
          <img
            width="700"
            :src="
              'https://api.luxarymodels.com/public/images/models/' +
              model.photo1
            "
          />
        </div>
        <div class="flex-row pd-15-10">
          <span class="single-name">{{ model.username }}</span>
          <button class="btn btn-post" type="submit">0, Follow</button>
        </div>
        <div class="table-skin">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Edad</th>
                <th scope="col">Altura</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22</td>
                <td>168</td>
                <td>S/. 180/h</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex-column pd-15">
          <span>Haz más visible tu anuncio</span>
          <button class="btn btn-post btn-100" type="submit">
            SUBIDAS AUTOMATICAS
          </button>
          <span>Gestiona tu anuncio</span>
          <button class="btn btn-post btn-100" type="submit">
            PANEL DE CONTROL
          </button>
        </div>

        <div class="pd-15">
          <p class="text-center">Estadísticas de este anuncio</p>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Edad</th>
                <th scope="col">Altura</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22</td>
                <td>168</td>
                <td>S/. 180/h</td>
              </tr>
            </tbody>
          </table>

          <button class="btn btn-report" type="submit">
            <img
              src="@/assets/images/close.svg"
              width="25"
              height="25"
              alt=""
            />
            Reportar Anuncio
          </button>
        </div>
      </div>
    </div>

    <div class="col-md-8">
      <div class="detalle">
        <h1>Amanda, 934757624, 22 Años. Kinesiologa Venezolana En San Borja</h1>
        <p class="ds">Estoy disponible a partir de las 09:00 AM.</p>
        <p class="resumen">
          Hola, amor, me llamo Amanda, soy una preciosa kinesióloga de 22 años,
          a tus órdenes. Me considero muy complaciente y con un cuerpo
          voluptuoso, de pechos totalmente naturales y riquísimos. Te daré una
          maravillosa experiencia, llena de lujuria y pasión, tal como lo estás
          buscando. Quiero complacerte con muchocon el trato más lujurioso y las
          poses que más disfrutes, además de un excitante sexo anal.
        </p>
        <p class="ds">Lugar de encuentro: <span>Departamento propio</span></p>

        <div>
          <img
            src="@/assets/images/open-24-hours.svg"
            width="30"
            height="30"
            alt=""
          />
          <span>Mis servicios</span>
        </div>

        <div class="servicios">
          <table class="table">
            <thead class="table-dark">
              <tr>
                <th scope="col">Servicios</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oral</td>
                <td>Si</td>
              </tr>
              <tr>
                <td>Anal</td>
                <td>Si</td>
              </tr>
              <tr>
                <td>Eyaculacion cuerpo</td>
                <td>Si</td>
              </tr>
              <tr>
                <td>Trato de novia</td>
                <td>Si</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="fotos-titulo">
          <img src="@/assets/images/imagen.svg" width="30" height="30" alt="" />
          <span>Mis Fotos </span>
          <span>Sin Verificar</span>
        </div>

        <div class="mis-fotos">
          <img src="@/assets/fotos/foto01.png" alt="" /><img
            src=""
            alt=""
          /><img src="" alt="" />
          <img src="@/assets/fotos/foto02.png" alt="" /><img
            src=""
            alt=""
          /><img src="" alt="" />
          <img src="@/assets/fotos/foto03.png" alt="" /><img
            src=""
            alt=""
          /><img src="" alt="" />
        </div>

        <div class="fotos-titulo">
          <img src="@/assets/images/video.svg" width="30" height="30" alt="" />
          <span>Mis Videos</span>
        </div>

        <div>
          <span>Este anuncio no contiene videos.</span>
        </div>

        <input
          class="form-control inp-comentarios"
          id=""
          aria-describedby="emailHelp"
        />
        <button class="btn btn-post" type="submit">COMENTAR</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ModelById",
  data() {
    return {
      model: {},
    };
  },
  methods: {
    ...mapActions("model", ["getModelById"]),
    async getModelByIdService() {
      try {
        let json = {
          id: this.$route.params.id,
        };
        let res = await this.getModelById(json);
        this.model = res.data[0];
        console.log(res);
      } catch (e) {
        console.log("error => ", e);
      }
    },
  },
  mounted() {
    this.getModelByIdService();
  },
};
</script>

<style lang="scss" scoped>
.model-resume {
  color: white;
  .black {
    background: black;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  .flex-row {
    display: flex;
    justify-content: space-around;
  }
  .btn-post {
    background: #e43875;
    color: #fff;
  }
  .btn-report {
    color: #e04f5f;
    background: #fff;
    width: 100%;
    border: none;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 5%;
  }
  .btn-100 {
    width: 100%;
    border: none;
    border-radius: 3px;
    position: relative;
    padding: 12px 30px;
    margin: 10px 1px;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0;
    will-change: box-shadow, trans;
  }
  .pd-15 {
    padding: 15px;
  }
  .table-skin {
    background: #fd61e3;
    background: -webkit-linear-gradient(left, #fd61e3, #fd61e3 50%, #ff77b8);
    background: linear-gradient(to right, #fd61e3, #fd61e3 50%, #ff77b8);
  }
  .single-name {
    font-size: 32px;
    text-transform: capitalize;
  }
  .pd-50 {
    padding: 50px;
  }

  .pd-15-10 {
    padding: 15px 10px;
  }
  .center-img {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
  }
  td {
    color: white;
    text-align: center;
  }
  th {
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  h1 {
    font-size: 2em;
    text-transform: capitalize;
    margin-bottom: 30px;
    margin-top: 0px;
  }
  .ds {
    background-color: #1a1a1a;
    color: #a0a0a0;
    span {
      font-weight: bold;
    }
  }
  .text-center {
    text-align: center;
    margin-top: -15px;
  }
  .detalle {
    margin: 50px 61px 0px 0px;
  }
  .resumen {
    font-size: 16px;
    color: white;
    text-align: justify;
    margin-bottom: 30px;
  }
  .servicios {
    margin-top: 15px;
    margin-bottom: 30px;
    table {
      border-color: rgba(255, 255, 255, 0.1);

      td {
        text-align: initial;
        color: #a0a0a0;
        font-size: 14px;
      }
      th {
        text-align: initial;
        font-size: 14px;
      }
    }
  }
  .fotos-titulo {
    margin-bottom: 20px;
    img {
      position: relative;
      top: -3px;
      padding-right: 5px;
    }
  }
  .mis-fotos {
    img {
      max-width: 365px;
      padding: 0px 10px;
    }
  }
  .inp-comentarios {
    color: #a0a0a0;
    background-color: #1a1a1a;
    border-color: rgba(255, 255, 255, 0.1);
    margin: 20px 0px;
  }
}
</style>
