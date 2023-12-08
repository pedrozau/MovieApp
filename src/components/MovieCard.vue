<template>
  <div class="ml-40 mt-5">
        <input type="text"  placeholder="Search" class="border border-gray-400 p-1 outline-none" v-model="inputSearch" >
        <span v-if="inputclear"><button @click="searchMovie" class="bg-red-600 text-white p-1 ">Search</button></span>
        
    </div>

    <div v-if="!inputSearch">
     
       
                <div class="grid grid-cols-4  mt-10 ml-5 mr-5">
        
        <div v-for="movie in movie" :key="movie.id" class="m-3">

            <div class="bg-white rounded-lg overflow-hidden shadow-md">
                <!-- Informações do Filme -->
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" alt="Nome do Filme" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h2 class=" font-semibold mb-2">{{ movie.title }}</h2>
                    <p class="text-gray-700">Releaded: {{ movie.release_date }}</p>
                    <button @click="goToInfo(movie.id)" class="border border-red-600 p-1 rounded">Get more info</button>
                </div>
            </div>

            </div>

        </div>

           

        
    </div>



    <div v-else>

       

       <div class="grid grid-cols-4  mt-10 ml-5 mr-5">
        
        <div v-for="movie in search" :key="movie.id" class="m-3">

            <div class="bg-white rounded-lg overflow-hidden shadow-md">
                <!-- Informações do Filme -->
                <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Nome do Filme" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h2 class=" font-semibold mb-2">{{ movie.name }}</h2>
                    <p class="text-gray-700">Releaded: {{ movie.release_date }}</p>
                     <h1></h1>
                    <button @click="goToInfo(movie.id)" class="border border-red-600 p-1 rounded">Get more info</button>
                </div>
            </div>

        </div>
    </div>

           
    </div>

   
    <div class="flex justify-center ">

      <button @click="loadMore" class="text-white  border border-red-700 p-2 rounded m-5">Get More</button>

    </div>

    


   
     
    

 
   
</template>

<script>
import { mapState } from 'vuex';
export default {
  
    data(){
        return {
             inputSearch:'',
             inputclear:true,
             page:1
        }
    },

   mounted(){
    this.$store.dispatch('loadMovie',{
        page:this.page
    })

   },
   computed: {
    ...mapState(['movie','search']),
     
   },
   methods: {
      goToInfo(id) {
        this.$router.push(`/info/${id}`)
      },

      searchMovie(){
        this.$store.dispatch('loadSearch',{
            search: this.inputSearch
        })
      },

      loadMore() {
      
        

         this.$store.dispatch('loadMovie',{
            page: this.page 
         })

         this.page++
        
         
      }
   } 
    
}
</script>


