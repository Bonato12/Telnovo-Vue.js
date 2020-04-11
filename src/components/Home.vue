<template>
    <div id="app">
      <br>
        <div class="container">
          <carousel>
              <slide>
                  <div style="width: 35rem;">
                      <img class="card-img-top" style="width: 19rem;" src="../assets/Home/nokia.jpg" alt="Card image cap">
                      <div class="card-body">
                          <p><STRONG> MOTO G6 </STRONG> </p>
                          <p>Pantalla 5.8", 1125 x 2436 pixels.
                              Procesador Apple A11 Bionic.
                              3GB RAM.
                              64GB/256GB, sin microSD.
                              Cámara: 12 MP, Dual.
                              OS: iOS 11.
                            </p>
                          <a href="#" class="btn" style="background-color:#fec400; color:black;">Comprar en Mercado Libre</a>
                      </div>
                  </div>
              </slide>
              <slide>
                <div style="width: 35rem;">
                    <img class="card-img-top" style="width: 19rem;" src="../assets/Home/motoG.jpg" alt="Card image cap">
                    <div class="card-body">
                        <p><STRONG> XIAOMI </STRONG> </p>
                        <p>Pantalla 5.8", 1125 x 2436 pixels.
                            Procesador Apple A11 Bionic.
                            3GB RAM.
                            64GB/256GB, sin microSD.
                            Cámara: 12 MP, Dual.
                            OS: iOS 11.
                          </p>
                        <a href="#" class="btn" style="background-color:#fec400; color:black;">Comprar en Mercado Libre</a>
                    </div>
                </div>

              </slide>
              <slide>
                  <blink style="background-color:#fec400; float:right;">50% OFF</blink>
                  <div style="width: 35rem;">
                      <img class="card-img-top" style="width: 19rem;" src="https://elektra.vteximg.com.br/arquivos/ids/426301-1000-1000/31033152.jpg?v=636608839651630000" alt="Card image cap">
                      <div class="card-body">
                          <p><STRONG> IPHONE 6S </STRONG> </p>
                          <p>Pantalla 5.8", 1125 x 2436 pixels.
                              Procesador Apple A11 Bionic.
                              3GB RAM.
                              64GB/256GB, sin microSD.
                              Cámara: 12 MP, Dual.
                              OS: iOS 11.
                            </p>
                          <a href="#" class="btn" style="background-color:#fec400; color:black;">Comprar en Mercado Libre</a>
                      </div>
                  </div>
              </slide>
              <slide>
                <div style="width: 35rem;">
                    <img class="card-img-top" style="width: 19rem;" src="https://celutronic.com/wp-content/uploads/2017/10/iphone-x-64gb-lte-4g-negru-3gb-ram_10037694_1_1505311093.jpg" alt="Card image cap">
                    <div class="card-body">
                        <p><STRONG> IPHONE X</STRONG> </p>
                        <p>Pantalla 5.8", 1125 x 2436 pixels.
                            Procesador Apple A11 Bionic.
                            3GB RAM.
                            64GB/256GB, sin microSD.
                            Cámara: 12 MP, Dual.
                            OS: iOS 11.
                          </p>
                        <a href="#" class="btn" style="background-color:#fec400; color:black;">Comprar en Mercado Libre</a>
                    </div>
                </div>
              </slide>
          </carousel>
          <div class="row">
                <div class="row" style="padding-left:55px;">
                <div style="width: 15rem; background-color:#fec400; border-radius: 2em; color:black">
                    <img  src="../assets/Home/envios.png"  style="padding-top:30px;" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">ENVIOS A TODO EL PAIS</h5>
                      <p class="card-text">Trabajamos constantemente realizando envíos a todas las proviencias de Argentina</p>
                    </div>
                </div>
                </div>
                <div class="row" style="padding-left:55px;" >
                <div  style="width: 15rem; background-color:#fec400; border-radius: 2em; color:black">
                    <img  src="../assets/Home/reparar.png" style="padding-top:30px;" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">REPARACIONES</h5>
                      <p class="card-text">Realizamos reparaciones de equipos con los mejores respuestos del mercado</p>
                    </div>
                </div>
              </div>
                <br>
                <div class="row" style="padding-left:55px;">
                <div style="width: 15rem; background-color:#fec400; border-radius: 2em; color:black">
                    <img  src="../assets/Home/actualizacion.png" style="padding-top:30px;" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">ACTUALIZACIONES CONSTANTES</h5>
                      <p class="card-text">Tenemos las últimas innovación del mercado internacional. Solo trabajamos con tecnología de primera calidad.</p>
                    </div>
                </div>
              </div>
                <br>
                <div class="row" style="padding-left:55px;">
                <div  style="width: 15rem; background-color:#fec400; color:black; border-radius: 2em;">
                    <img  src="../assets/Home/comentarios.png" style="padding-top:30px;" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">EXCELENTE REPUTACION</h5>
                      <p class="card-text">Contamos con reputaciones excelentes en los sitios de compra y venta más renombrados de Argentina, con 100% de calificaciones positivas.</p>
                    </div>
                </div>
                </div>
            </div>
            <br>
            <hr>
            <h2>Marcas</h2>
            <div>
              <img src="../assets/Home/marcas.png" style="width:1000px;">
            </div>
            <hr>
      </div>
  <br>
  <br>
</div>
</template>

<script>

//import {db} from '../firebase.js'

export default {
  name: 'app',
  created(){


    		// db.ref('persona').on('value',  snapshot => this.cargar(snapshot.val()))

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
    background: url("../assets/Home/j8atras.jpg")  no-repeat;
    float: center;
    height: 300px;
    width: 210px;
    transition: .5s linear;
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
