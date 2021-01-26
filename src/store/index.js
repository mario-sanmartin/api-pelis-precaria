import { createStore } from 'vuex'
import router from '../router';

export default createStore({
  state: {
    peliculas:[],
    pelicula: {
      id:'',
      nombre: '',
      categorias: [],
      estado: '',
      duracion: 0
    }
  },
  mutations: {
   
    
    set(state,payload){
      //el payload es nuestra tarea -Empujar una nueva tarea dentro de nuestro array
      //todo lo que sea distinto al id que recibimos
      state.peliculas.push(payload)
      console.log(state.peliculas)
    },
    eliminar(state,payload){
      //por cada recorrido preguntamos si item.id es distitnto
      state.peliculas = state.peliculas.filter(item => item.id !== payload)
      console.log('peli deleteada');

    },
    pelicula(state,payload){
      if(!state.peliculas.find(item => item.id === payload)){
        router.push('/')
        return
      }
      //Si esto es igual devolvera el objeto y lo guardara en pelicula
      state.pelicula = state.peliculas.find(item => item.id === payload)
    },
    update(state,payload){
      //crea un array nuevo dependiendo la condicon
      state.peliculas = state.peliculas.map(item => item.id === payload.id ? payload : item)
      router.push('/')

    },
    cargar(state,payload){
      state.peliculas = payload
    }
  },
  actions: {
    //Cargar todos las peliculas que estan en la db
   async cargarLocalStorage({commit}){
      try {
        const url =  await fetch(`https://papi-6888b-default-rtdb.firebaseio.com/peliculas.json`)
        const dataDB = await url.json()
        // console.log(dataDB)

        const arrayPelis = []

        for(let id in dataDB){
          arrayPelis.push(dataDB[id])
        }
        console.log(arrayPelis)
        commit('cargar',arrayPelis)
        } catch (error) {
        console.log(error);
      }

    },
   async setPeliculas({commit},pelicula){
      try {
       const res =  await fetch(`https://papi-6888b-default-rtdb.firebaseio.com/peliculas/${pelicula.id}.json`,{
          method: 'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify(pelicula)
        })
        //transformamos lo que viene de la bd similar a las apis
        const dataDB = await res.json() 
        console.log(datDB)
        

      } catch (error) {
        console.log(error);
      }
      commit('set',pelicula)
    },
    async deletePelicula({commit},id){
      
      try {
         await fetch(`https://papi-6888b-default-rtdb.firebaseio.com/peliculas/${id}.json`,{
      method:'DELETE'
      })
      commit('eliminar',id)
      } catch (error) {
        console.log(error);
      }      
    },
    setPelicula({commit},id){
      commit('pelicula',id)
    },
    async updatePelicula({commit},pelicula){
      try {
        const url =  await fetch(`https://papi-6888b-default-rtdb.firebaseio.com/peliculas/${pelicula.id}.json`,{
          method: 'PATCH',
          body: JSON.stringify(pelicula)
      })
        const dataDB = await url.json()
        commit('update',dataDB)
        } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
