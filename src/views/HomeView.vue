<template>
  <div class="home">
    <MovieHeader/>
    
    <Suspense timeout="2">
      <template #default>
        <movie-card/>
      </template>


      <template #fallback>
        <div>
          Loading...
        </div>
      </template>
    </Suspense>

     

   
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue';

const MovieCard = defineAsyncComponent(()=> import('@/components/MovieCard.vue'))
const MovieHeader = defineAsyncComponent(()=> import('@/components/MovieHeader.vue'))


export default {
  name: 'HomeView',
  components: {
     MovieHeader,
    MovieCard
  }
}
</script>
