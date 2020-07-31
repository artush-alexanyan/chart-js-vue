<template>
    <div class="filter mt-5">
        <div class="container mt-5">
            <div class="input-group">
                <div class="input-group-prepend">
                    <button type="button" class="btn btn-primary">
                        <i class="fas fa-search"></i>
                    </button>
                </div>                
                <input 
                    type="text" 
                    placeholder="search..." 
                    class="form-control" 
                    aria-label="Text input with segmented dropdown button"
                    v-model="search"
                    >
                <div class="input-group-append">
                    <button type="button" class="btn btn-success">
                        <i class="fas fa-filter"></i>
                    </button>
                    <button 
                            type="button" 
                            class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                    <button class="dropdown-item" 
                            @click="sortByCapitalCity"
                            >
                            Capital
                    </button>
                    <button class="dropdown-item" 
                            @click="sortByPopulation"
                            >
                             Population 
                    </button>
                    <button class="dropdown-item" 
                            style="color: green; text-align: center;" 
                            @click="getCountries"> 
                            <i class="fas fa-sync"></i> 
                    </button>
                    </div>
                </div>
            </div> 
            <h5 class="text-center text-danger mt-5" 
                v-show="filterCountries.length < 1"
                >
                No search result!
            </h5>
            <div class="loader" v-if='loading'>
               <baseLoader 
               
               /> 
            </div>
            <div class="container mt-5" v-if="!loading">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Country</th>
                    <th scope="col">Capital</th>
                    <th scope="col">Population</th>
                    </tr>
                </thead>
                <tbody 
                    v-for="(country, index) in filterCountries"
                    :key="country.name"                  
                    >
                    <tr>
                    <th scope="row">{{ index + 1 }}</th>
                    <td> {{ country.name }} </td>
                    <td> {{ country.capital }} </td>
                    <td> {{ country.population }} </td>
                    </tr>
                </tbody>
                </table>            
            </div>
            <div class="container" v-for="n in popArr" :key="n.id"> <h1>Hello : {{ n }}</h1> </div>                         
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import baseLoader from '../components/base/baseLoader.vue'
export default {
    name: 'Filter',
    components: {
        baseLoader
    },
    data: () => {
        return {
          countries: [],
          search: '',
          popArr: [],
          loading: false  
        }
    },
    methods: {
        getCountries ()  {
            this.loading = true
            axios   
                .get('https://restcountries.eu/rest/v2/region/europe')
                    .then(response => {
                        setTimeout(() => {
                        this.countries = response.data
                        this.loading = false                            
                    }, 500)
            })
        }   ,
        sortByPopulation(){
            return this.countries.sort((a, b) => a.population - b.population );
        },
        sortByCapitalCity () {
            return this.countries.sort( (a, b) => {
                if(a.capital < b.capital){
                    return -1
                }
                if(a.capital > b.capital) {
                    return 1
                }
                return 0
            })
        },
        resetTable () {
            return this.countries
        }
    },
    computed: {
        filterCountries () {
            return this.countries.filter(country => {
                if(country.name.toLowerCase().includes(this.search.toLowerCase())){
                    return country
                }
            })
        }      
    },
    created () {
       this.getCountries() 
    }
}
</script>

<style scoped>

</style>