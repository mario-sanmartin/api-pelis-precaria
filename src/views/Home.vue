<template>

  <h1 class="my-5">Formulario Peliculas</h1>

  <form @submit.prevent="procesarFormulario">
   <Input :pelicula="pelicula"/>
  </form>
  <hr>
  <p>
    <!-- {{pelicula}} -->
    <Listar />
  </p>
</template>

<script>

import Input from '../components/Input';
import Listar from '../components/Listar';
import {mapActions} from 'vuex';

//Importando shortid generador de ids
const shortid = require('shortid')
export default {
  name: 'Home',
  components: {
    Input,
    Listar
  },
  data() {
    return {
      pelicula: {
        id:'',
        nombre: '',
        categorias: [],
        estado: '',
        duracion: 0
      }
    }
  },
  methods: {
    ...mapActions(['setPeliculas']),
    procesarFormulario(){
      console.log(this.pelicula)
      if(this.pelicula.nombre.trim() === ""){
        console.log('Campo vacío')
        return
      }
      console.log('no está vacio')

        //Generar Id
        this.pelicula.id = shortid.generate()
        console.log(this.pelicula.id)


      // envian los datos
        this.setPeliculas(this.pelicula)
      this.pelicula = {
        id:'',
        nombre: '',
        categorias: [],
        estado: '',
        duracion: 0
      }
    }
  },

}
</script>
