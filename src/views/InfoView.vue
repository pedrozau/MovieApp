<template>
   
   <div>
    <button @click="goHome" class="text-white border ml-32 mt-10 border-red-600 p-1 rounded">Voltar</button>
   </div>

    <div class="ml-32 mr-32 mt-20">
       <div class="flex justify-between">
        <div>
           <img :src="`https://image.tmdb.org/t/p/w500/${movieById.poster_path}`">
        </div>

        <div class="ml-10 text-white">
        <h1>Titulo: {{ movieById.title }}</h1>
        <h1>Laçamento: {{ movieById.release_date }}</h1>
        <h1>Popularidade: {{ movieById.popularity }}</h1>
           <p>Descrição: {{  movieById.overview }}</p>

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