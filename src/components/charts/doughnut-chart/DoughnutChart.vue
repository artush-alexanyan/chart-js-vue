<script>
  import { Doughnut } from 'vue-chartjs'
  import axios from 'axios'

  export default {
    name: 'DoughnutChart',
    extends: Doughnut,
    data: () => {
      return {
        countries: [],
        chartData: {
          labels: [],
          datasets: [{
              borderWidth: 1,
              borderColor: [
                  "AliceBlue",
                  "AntiqueWhite",
                  "Aqua",
                  "Aquamarine",
                  "Azure",
                  "Beige",
                  "Bisque",
                  "Black",
                  "BlanchedAlmond",
                  "Blue",
                  "BlueViolet",
                  "Brown",
                  "BurlyWood",
                  "CadetBlue",
                  "Chartreuse",
                  "Chocolate",
                  "Coral",
                  "CornflowerBlue",
                  "Cornsilk",
                  "Crimson",
                  "Cyan",
                  "DarkBlue",
                  "DarkCyan",
                  "DarkGoldenRod",
                  "DarkGray",
                  "DarkGrey",
                  "DarkGreen",
                  "DarkKhaki",
                  "DarkMagenta",
                  "DarkOliveGreen",
                  "DarkOrange",
                  "DarkOrchid",
                  "DarkRed",
                  "DarkSalmon",
                  "DarkSeaGreen",
                  "DarkSlateBlue",
                  "DarkSlateGray",
                  "DarkSlateGrey",
                  "DarkTurquoise",
                  "DarkViolet",
                  "DeepPink",
                  "DeepSkyBlue",
                  "DimGray",
                  "DimGrey",
                  "DodgerBlue",
                  "FireBrick",
                  "FloralWhite",
                  "ForestGreen",
                  "Fuchsia",
                  "Gainsboro",
                  "GhostWhite",
                  "Gold",
                  "GoldenRod",
                  "Gray",  
              ],
              backgroundColor: [
                  "AliceBlue",
                  "AntiqueWhite",
                  "Aqua",
                  "Aquamarine",
                  "Azure",
                  "Beige",
                  "Bisque",
                  "Black",
                  "BlanchedAlmond",
                  "Blue",
                  "BlueViolet",
                  "Brown",
                  "BurlyWood",
                  "CadetBlue",
                  "Chartreuse",
                  "Chocolate",
                  "Coral",
                  "CornflowerBlue",
                  "Cornsilk",
                  "Crimson",
                  "Cyan",
                  "DarkBlue",
                  "DarkCyan",
                  "DarkGoldenRod",
                  "DarkGray",
                  "DarkGrey",
                  "DarkGreen",
                  "DarkKhaki",
                  "DarkMagenta",
                  "DarkOliveGreen",
                  "DarkOrange",
                  "DarkOrchid",
                  "DarkRed",
                  "DarkSalmon",
                  "DarkSeaGreen",
                  "DarkSlateBlue",
                  "DarkSlateGray",
                  "DarkSlateGrey",
                  "DarkTurquoise",
                  "DarkViolet",
                  "DeepPink",
                  "DeepSkyBlue",
                  "DimGray",
                  "DimGrey",
                  "DodgerBlue",
                  "FireBrick",
                  "FloralWhite",
                  "ForestGreen",
                  "Fuchsia",
                  "Gainsboro",
                  "GhostWhite",
                  "Gold",
                  "GoldenRod",
                  "Gray",                 
              ],
              data: []
            }]
        },
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods: {
      getCountries () {
            axios
              .get('https://restcountries.eu/rest/v2/region/europe')
                .then(response => {
                  this.countries = response.data  
                  console.log(response.data)  
                  for(let i = 0; i < this.countries.length; i++) {
                    let ceilNum = Math.ceil(this.countries[i].population / 10000)
                    this.chartData.labels.push(this.countries[i].name)
                    this.chartData.datasets[0].data.push(ceilNum)
                  }      
                    // console.log(this.chartData.labels)   
                    // console.log(this.chartData.datasets[0].data)   
             })
        }             
    },
    mounted () {
      this.renderChart(this.chartData, this.options)
    },
    created () {
      this.getCountries ()
    }
  }
</script>