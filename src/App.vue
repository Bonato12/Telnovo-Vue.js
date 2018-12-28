<template>
  <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark">
                <h3 style="color: black; background-color:#fec400; ;"> TELNOVO </h3>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <router-link   tag="li" class-active="active"   to="/Home">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link   tag="li" class-active="active"   to="/Celulares">Celulares</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link   tag="li" class-active="active"   to="/Accesorios">Accesorios</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link   tag="li" class-active="active"   to="/Nosotros">Nosotros</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link   tag="li" class-active="active"   to="/Contacto">Contacto</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        <router-view></router-view>
        <br>
        <br>
        <footer style="height:100px; background-color: #fec400;">

        </footer>

  </div>
</template>

<script>

import {db} from './firebase';

export default {
  name: 'app',
  created(){
         this.$router.push("Home");

  },
  data () {
    return {

    }
  },
  methods:{

  onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
}
}
</script>

<style>
body{
  background-repeat: no-repeat;
 background-attachment: fixed;
 background-position: center;
  color: white;
}

.navbar{background:#222222;}
.nav-item::after{content:'';display:block;width:0px;height:2px;background:#fec400;transition: 0.2s;}
.nav-item:hover::after{width:100%;}
.nav-link{padding:15px 5px;transition:0.2s;}



 nav li.router-link-active {
   background-color: #fec400;
   color: black;
   height: 193%;
 }



 nav li{
   color: white;
   padding: 2px 7px 2px 7px;

 }

 nav{
   height: 75px;
 }


</style>
