import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
     movie:[],
     search:[],
     movieById:[]
  },
  getters: {
    getMovie(state){
        return state.movie
    },
    getSearch(state) {
       return state.search
    },
    getMovieById(state){
       return state.movieById
    }
  },
  mutations: {
     SET_Movie(state, movie){
       state.movie = movie 
     },

     SET_Search(state, seach){
        state.search = seach
     },

     SET_MovieById(state, id){
         state.movieById = id
     }
  },
  actions: {
     async loadMovie({commit},data) {
        const config = {
           headers: {
             'Authorization':`Bearer ${process.env.VUE_APP_TMDB_API}`
           }
        }
      
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=${data.page}`,config)
        commit('SET_Movie',response.data.results)

        return response.data.results
        

     },

     async loadSearch({commit},data) {
      const config = {
         headers: {
           'Authorization':`Bearer ${process.env.VUE_APP_TMDB_API}`
         }
      }


      const response = await axios.get(`https://api.themoviedb.org/3/search/collection?query=${data.search}&include_adult=true&language=pt-br&page=1`,config)

      commit('SET_Search',response.data.results)

      console.log(response.data.results)

     },

     async loadOneMovie({commit},data) {
      const config = {
         headers: {
           'Authorization':`Bearer ${process.env.VUE_APP_TMDB_API}`
         }
      }

       const response =  await axios.get(`https://api.themoviedb.org/3/movie/${data.id}?language=pt-br`,config)
      
       commit('SET_MovieById',response.data)

       
     }

  },
  modules: {
  }
})
