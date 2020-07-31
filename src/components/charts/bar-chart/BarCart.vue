<script>
  import { Bar } from 'vue-chartjs'
  import axios from 'axios'

  export default {
    extends: Bar,
    data() {
      return {
        chartData: {
          labels: [],
          datasets: [{
            label: 'Area (km2)',
            borderWidth: 1,
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
            borderColor: [

            ],
            pointBorderColor: '#2554FF',
            data: []
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods: {
      getData () {
        axios
          .get('https://restcountries.eu/rest/v2/region/europe')
            .then(response => {
              this.countries = response.data
              let newCountries = this.countries.slice(0, 21)
              for(let i = 0; i < newCountries.length; i++) {
                let numCeil = Math.ceil(newCountries[i].area)
                this.chartData.labels.push(newCountries[i].name)
                this.chartData.datasets[0].data.push(numCeil)
              }
              console.log(this.chartData.labels)
              console.log(this.chartData.datasets[0].data)
            })
      }
    },    
    mounted() {
      this.renderChart(this.chartData, this.options)
      this.getData ()
    },
  }
</script>