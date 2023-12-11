<template>
   
   <div>
    <button @click="goHome" class="text-white border sm:ml-32 sm:mt-10 mt-5 w-24 m-auto flex justify-center border-red-600 p-1 rounded">Voltar</button>
   </div>

    <div class="sm:ml-32 sm:mr-32 mt-20">
       <div class="flex sm:justify-between  flex-col">
        <div>
           <img :src="`https://image.tmdb.org/t/p/w500/${movieById.poster_path}`" class="w-full object-cover">
        </div>

        <div class="ms:ml-10  text-white m-2">
        <h1>Titulo: {{ movieById.title }}</h1>
        <h1>Laçamento: {{ movieById.release_date }}</h1>
        <h1>Popularidade: {{ movieById.popularity }}</h1>
           <p class="">Descrição: {{  movieById.overview }}</p>

        </div>
       </div>
    </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
     created(){
         this.$store.dispatch('loadOneMovie',{
             id: this.$route.params.id
         })
     },

     computed: mapState(['movieById']),

     methods: {
        goHome() {
            this.$router.push('/')
        }
     }
}
</script>