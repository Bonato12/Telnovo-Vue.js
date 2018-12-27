<template>
  <div id="app">
      <br>
      <div class="container">
        <form>
            <div class="form-group">
              <label for="inputdefault">Small input</label>
              <input class="form-control form-control-sm" id="inputdefault" type="text">
            </div>
            <div class="form-group">
              <label for="inputlg">Default input</label>
              <input class="form-control" id="inputlg" type="text">
            </div>
            <div class="form-group">
              <label for="inputsm">Large input</label>
              <input class="form-control form-control-lg" id="inputsm" type="text">
            </div>
        </form>
      </div>
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

.dropbtn {
    background-color: #338DFF;
    color: white;
    padding: 10px;
    font-size: 16px;
    border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
    padding-left: 40px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}


.map{
float: left;
padding-top: 100px;

}


.wsp{
float: center ;
padding-left: 40%;
padding-top: 100px;

}

.mail{
float: right ;
padding-left: 20%;
padding-top: 100px;

}

.contenedor{
  border:5px solid lightblue;
}


</style>
