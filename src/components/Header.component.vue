<template>
    <header>
        <div class="container-logo">
            <img width="215" height="50" src="@/assets/images/logo.png" alt="logo"/>
        </div>
        <div class="menu-navigation">
            <nav>
                <ul>
                    <li>
                        <router-link to="/">INICIO</router-link>
                    </li>
                    <li>
                        <router-link to="/nosotros">NOSOTROS</router-link>
                    </li>
                    <li>
                        <router-link to="/contactanos">CONTÁCTANOS</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="menu-bar">
            <div class="count-likes">
                <img width="48" height="48" src="@/assets/images/heart.svg">
                <span class="counter-likes">0</span>
            </div>
            <div class="container-items">
                <img class="hamburguer-button" width="32" src="@/assets/images/hamburguer.svg" @click="openMenu()">
                <div class="items-menu">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
  methods:{
    openMenu(){
        console.log("abrir menú")
    }
  }
};
</script>

<style lang="scss">
header{
    width: 100%;
    background: #0d0d0d;
    display: flex !important;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 130px;
    height: 130px;
    .menu-navigation{
        nav{
            ul{
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                li{
                    padding: 28px 35px;
                    color: #ffffff;
                    font-size: 16px;
                    position: relative;
                    a{
                        color: inherit !important;
                        text-decoration: none;
                        &.router-link-exact-active{
                            color: #e0006c !important;
                        }
                        &:hover{
                            color: #e0006c !important;
                        }
                    }
                    &:before {
                        content: "\2022";
                        position: absolute;
                        top: 48%;
                        left: 0;
                        margin-top: -13px;
                        color: #e0006c;
                        display: inline-block;
                        font-size: 20px;
                    }
                }
            }
        }
    }
    .menu-bar{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        .count-likes{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 8px;
            .counter-likes{
                color: #ffffff;
                font-size: 18px;
            }
        }
        .container-items{
            .hamburguer-button{
                cursor: pointer;
            }
        }
        .navbar-toggler{
            border-color: transparent;
            color: #ffffff
        }
    }
}

</style>