<template>
  <div>
      <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Duracion</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in peliculas" :key="item.id">
      <th scope="row">{{item.id}}</th>
     <td>{{item.nombre}}</td>
     <td>
         <span v-for="(cat,index) in item.categorias" :key="index">
             {{cat}}
             {{
                 item.categorias.length === index + 1 ? '': ', '
             }}
         </span>
     </td>
     <td>{{item.estado}}</td>
     <td>{{item.duracion}}</td>
     <td class="text-center">
         <router-link 
         class="btn btn-warning btn-sm mr-2"
         :to="{
            name: 'Editar', //viajamos a la ruta editar
            params:{
              id: item.id //le pasamos el parametro
            }
           }"
         >editar
         </router-link>

         <button class="btn btn-danger btn-sm " @click="deletePelicula(item.id)">eliminar</button>
     </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
    computed:{
        ...mapState(['peliculas'])
    },
    methods:{
      ...mapActions(['deletePelicula'])
    }
}
</script>

<style>

</style>