<template>
  <Navbar />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import {mapActions} from 'vuex';
  export default {
    components: {
      Navbar
    },
    methods:{
      ...mapActions(['cargarLocalStorage'])
    },
    created(){
      this.cargarLocalStorage()
    }
  }
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #313131;
  color: white;
}
</style>

