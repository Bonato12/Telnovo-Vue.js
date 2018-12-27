<template>
    <div id="app">
      <br>
      <br>
        <div class="container">
          <carousel>
              <slide id="motoG">
                  <blink style="background-color:#fec400; float:right;">25% OFF</blink>
                  <img src="../assets/Home/moto.jpg">
                  <p><STRONG> MOTO G </STRONG> </p>
                  <p> Pantalla 5.8", 1125 x 2436 pixels.
                      Procesador Apple A11 Bionic.
                      3GB RAM.
                      64GB/256GB, sin microSD.
                      Cámara: 12 MP, Dual.
                      Batería: 2700 mAh.
                      OS: iOS 11.
                      Perfil: 7.7 mm.
                  </p>
              </slide>
              <slide>
                  <blink style="background-color:#fec400; float:right;">10% OFF</blink>
                  <img src="../assets/Home/celu.jpg">
                  <p>
                  <a target="_blank" title="Ir a Mercado Libre" href="https://articulo.mercadolibre.com.ar/MLA-759600302-celular-libre-samsung-j8-violeta-_JM?quantity=1">MOTOROLA </a>
                  </p>
                  <p> Pantalla 5.8", 1125 x 2436 pixels.
                      Procesador Apple A11 Bionic.
                      3GB RAM.
                      64GB/256GB, sin microSD.
                      Cámara: 12 MP, Dual.
                      Batería: 2700 mAh.
                      OS: iOS 11.
                      Perfil: 7.7 mm.
                  </p>
              </slide>
              <slide>
                  <blink style="background-color:#fec400; float:right;">20% OFF</blink>
                  <img src="../assets/Home/celu1.jpg">
                  <p><STRONG> XIAOMI </STRONG> </p>
                  <p> Pantalla 5.8", 1125 x 2436 pixels.
                      Procesador Apple A11 Bionic.
                      3GB RAM.
                      64GB/256GB, sin microSD.
                      Cámara: 12 MP, Dual.
                      Batería: 2700 mAh.
                      OS: iOS 11.
                      Perfil: 7.7 mm.
                  </p>
              </slide>
              <slide>
                  <blink style="background-color:#fec400; float:right;">50% OFF</blink>
                  <img src="../assets/Home/s10.jpg">
                  <p><STRONG> SAMSUNG </STRONG> </p>
                  <p> Pantalla 5.8", 1125 x 2436 pixels.
                      Procesador Apple A11 Bionic.
                      3GB RAM.
                      64GB/256GB, sin microSD.
                      Cámara: 12 MP, Dual.
                      Batería: 2700 mAh.
                      OS: iOS 11.
                      Perfil: 7.7 mm.
                  </p>
              </slide>
              <slide>
                  <blink style="background-color:#fec400; float:right;">50% OFF</blink>
                  <img src="../assets/Home/iphone.jpg">
                  <p><STRONG> IPHONE </STRONG> </p>
                  <p> Pantalla 5.8", 1125 x 2436 pixels.
                      Procesador Apple A11 Bionic.
                      3GB RAM.
                      64GB/256GB, sin microSD.
                      Cámara: 12 MP, Dual.
                      Batería: 2700 mAh.
                      OS: iOS 11.
                      Perfil: 7.7 mm.
                  </p>
              </slide>
          </carousel>
          <br>
          <div class="row">
              <div class="row" style="padding-left:55px;">
              <div style="width: 15rem; background-color:#fec400; color:black">
                  <img  src="../assets/Home/envios.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">ENVIOS A TODO EL PAIS</h5>
                    <p class="card-text">Trabajamos constantemente realizando envíos a todas las proviencias de Argentina</p>
                  </div>
              </div>
              </div>
              <div class="row" style="padding-left:55px;" >
              <div  style="width: 15rem; background-color:#fec400; color:black">
                  <img  src="../assets/Home/reparar.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">REPARACIONES</h5>
                    <p class="card-text">Realizamos reparaciones de equipos con los mejores respuestos del mercado</p>
                  </div>
              </div>
            </div>
              <br>
              <div class="row" style="padding-left:55px;">
              <div style="width: 15rem; background-color:#fec400; color:black">
                  <img  src="../assets/Home/Actualizacion.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">ACTUALIZACIONES CONSTANTES</h5>
                    <p class="card-text">Tenemos las últimas innovación del mercado internacional. Solo trabajamos con tecnología de primera calidad.</p>
                  </div>
              </div>
            </div>
              <br>
              <div class="row" style="padding-left:55px;">
              <div  style="width: 15rem; background-color:#fec400; color:black">
                  <img  src="../assets/Home/comentarios.png" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">EXCELENTE REPUTACION</h5>
                    <p class="card-text">Contamos con reputaciones excelentes en los sitios de compra y venta más renombrados de Argentina, con 100% de calificaciones positivas.</p>
                  </div>
              </div>
              </div>
            </div>
      </div>
  <br>
  <br>
</div>
</template>

<script>

import {db} from '../firebase.js'

export default {
  name: 'app',
  created(){


    		 db.ref('persona').on('value',  snapshot => this.cargar(snapshot.val()))

  },
  data () {
    return {
       Marca: null,
       Modelo: null,
       Caracteristicas: null,
       Precio: null,
       Imagen: null,
       celulares: [],
       slide: 0,
      sliding: null
    }
  },
  methods:{
    cargar(ListaFirebase){
			this.celulares = [];
			for (var key in ListaFirebase){
				this.celulares.push({
				Marca: ListaFirebase[key].Marca,
				Modelo: ListaFirebase[key].Modelo,
				Caracteristicas: ListaFirebase[key].Caracteristicas,
				Precio: ListaFirebase[key].Precio,
        Imagen: ListaFirebase[key].Imagen,
        key: key
				})
      }
  },
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

blink, .blink {
-webkit-animation: blink 1s step-end infinite;
-moz-animation: blink 1s step-end infinite;
-o-animation: blink 1s step-end infinite;
animation: blink 1s step-end infinite;
}
@-webkit-keyframes blink { 67% { opacity: 0 }}
@-moz-keyframes blink {  67% { opacity: 0 }}
@-o-keyframes blink {  67% { opacity: 0 }}
@keyframes blink {  67% { opacity: 0 }}

.caja{
  float:left;
  padding-left: 120px;
  text-align: center;
}

#motoG:hover {

}

#arreglos{
  float: left;

}

#comentarios{
  float: center;

}

#envios {
  float: center;


}

#envios{
    float: right;
}




</style>
