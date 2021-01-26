<template>
  <div>
      {{$route.params.id}} {{pelicula}}
    <form @submit.prevent="updatePelicula(pelicula)">
        <Input :pelicula="pelicula"/>
    </form>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
import Input from '../components/Input';
export default {
  components:{
    Input
  },
  computed:{
    ...mapState(['pelicula'])
  },
  methods:{
    ...mapActions(['setPelicula','updatePelicula'])
  },
  created(){
    this.setPelicula(this.$route.params.id)
  }
}
</script>

<style>

</style>