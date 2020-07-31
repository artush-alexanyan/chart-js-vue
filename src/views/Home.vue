<template>
  <div class="home mt-5">
      <div class="container">
        <div class="jumpotron">
          <h3 class="text-center text-danger">Eourope Countries</h3>
        </div>
      </div>
      
        <div class="loading" v-show="isLoading">

          <baseLoader 
          
          />

      </div>
      <div>
        <div class="container-fluid mt-5" v-show="!isLoading">
          <table class="table table-hover table-dark mt-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Country name</th>
                <th scope="col">Capital</th>
                <th scope="col">Population</th>
              </tr>
            </thead>
            <tbody 
                v-for="(country, index) in countryNames" 
                :key="country.name"
              >
              <tr>
                <th scope="row"> {{ index + 1 }} </th>
                <td> {{ country.name }} </td>
                <td> {{ country.capital }} </td>
                <td> {{ country.population }} </td>
              </tr>
            </tbody>
          </table>        
        </div>           
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import baseLoader from '../components/base/baseLoader.vue'
export default {
  name: 'Home',
  components: { 
    baseLoader
  },
  data: () => {
    return {
      allCountriesUrl: 'https://restcountries.eu/rest/v2/region/europe',
      countryNames: [],
      isLoading: false
    }
  },
  methods: {
    getData () {
      this.isLoading = true
      axios
        .get(this.allCountriesUrl)
          .then(response => {
            setTimeout(() => {
              this.countryNames = response.data
              this.isLoading = false              
            }, 500);
        })
      }
  },
  created () {
    this.getData ()
  }
}
</script>

<style scoped>

</style>