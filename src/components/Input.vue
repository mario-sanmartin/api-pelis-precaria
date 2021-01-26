<template>
  <div>
       <input 
      type="text"
      class="form-control my-2"
      placeholder="Ingrese nombre"
      v-model.trim="pelicula.nombre"
    >

    <div class="form-check form-check-inline">
      <input 
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="pelicula.categorias"
        value="terror"
      >
      <label for="check-1" class="form-check-label">Terror</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="pelicula.categorias"
        value="humor"
      >
      <label for="check-2" class="form-check-label">Humor</label>
    </div>

    <div class="form-check form-check-inline">
        <input 
            type="checkbox"
            id="check-3"
            class="form-check-input"
            v-model="pelicula.categorias"
            value="thriller"
        >
        <label for="check-3" class="form-check-label">Suspenso</label>
    </div>

    <div class="mt-2">
      <div class="form-check form-check-inline">
        <input 
          type="radio"
          id="radio-1"
          class="form-check-input"
          value="vista"
          v-model="pelicula.estado"
        >
        <label for="radio-1" class="form-check-label">Vista</label>
      </div>
      <div class="form-check form-check-inline">
        <input 
          type="radio"
          id="radio-2"
          class="form-check-input"
          value="pendiente"
          v-model="pelicula.estado"
        >
        <label for="radio-2" class="form-check-label">Pendiente</label>
      </div>
    </div>

    <div class="mt-2">
        <span>Minutos</span>
      <input 
        type="number"
        class="form-control"
        v-model.number="pelicula.duracion"
      >
    </div>

    <button 
      class="btn btn-success mt-2 btn-block" 
      type="submit"
      :disabled="bloquear"
    >
      Procesar
    </button>
  </div>
</template>

<script>
export default {
    props:{
        pelicula:Object
    },
  computed: {
    bloquear(){
      return this.pelicula.nombre.trim() === "" ? true : false
    }
  }
}
</script>

<style>

</style>