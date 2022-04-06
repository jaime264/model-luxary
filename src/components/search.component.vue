<template>
  <div>
    <div class="text-center title">
      <h1 class="first_h1">Kinesiologas Peru</h1>
      <div class="navfilter hidden-xs">
        <a title="Kinesiólogas en Lima">Kinesiólogas Lima</a> <span>, </span>
        <a title="Kinesiólogas en Arequipa">Kinesiólogas Arequipa</a>
        <span>, </span>
        <a title="Kinesiólogas en Trujillo">Kinesiólogas Trujillo</a>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4 textbox-01">
        <div id="input_container">
          <input
            type="search"
            id="input"
            placeholder="¿Donde estás?"
            class="form-control"
          /><img src="" id="input_img" />
        </div>
      </div>

      <div class="col-md-4 textbox-01">
        <input
          type="search"
          placeholder="¿Qué buscas? Ej: Culona, Tetona, Operada.."
          class="form-control searchinput "
        />
      </div>

      <div class="col-md-2 filtro">
        <button class="btn btn-light btn_filter">+ Filtros</button>
      </div>
      
      <div class="col-md-2 buscar">
        <a
          class="btn btn-default btn_filter"
          style="background: #e0076c; color: white"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            class="bi bi-search"
            style="position: relative; top: 3px; left: -5px"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            ></path></svg
          >Buscar</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

<style lang="scss" scoped>
.title {
  margin-bottom: 10px;
  h1 {
    color: white;
    font-size: 28px;
  }
  a {
    color: #e0006c;
  }
  span {
    color: white;
  }
}

.textbox-01 {
  input {
    background-color: #1a1a1a;
    color: #a0a0a0;
    border-color: rgba(255, 255, 255, 0.1);
  }
}

.filtro{
  button{
    width: 275px;
  }
}

.buscar{
  a{
    width: 275px;
  }
}

@media (max-width: 1600px) {
  .filtro{
  button{
    width: 180px;
  }
}

.buscar{
  a{
    width: 180px;
  }
}
}

@media (max-width: 1060px) {
  .filtro{
    button{
      width: 115px;
    }
}

.buscar{
  a{
    width: 115px;
  }
}
}

@media (max-width: 750px) {
  .filtro{
    button{
      width: 100%;
      margin-top: 15px;
      margin-bottom: 10px;
    }
}

.buscar{
  a{
    width: 100%;
    margin-bottom: 10px;
  }
}
}
</style>