<template>
  <div class="about">
    <div class="container-fluid">

              <div class="left">
                <baseButton 
                    :onClick="pageMinus"
                    :class="[ currentPage === 0 ? 'disabled' : '']"
                  >
                  <i class="fas fa-arrow-left"></i>
                </baseButton> 
                
                <baseButton 
                    :onClick="pagePlus"
                    :class="[ currentPage === 2 ? 'disabled' : '']"
                    class="float-right"
                  >
                  <i class="fas fa-arrow-right"></i>
                </baseButton>                                   
              </div>

              <div class="container">
                  <div class="row row justify-content-center">
                    <div class="col">
                      <ul class="list-group mt-5">

                        <div v-show="currentPage === 0">
                          <li class="list-group-item header">
                            <h6 class="text-center"> Capter 1</h6>
                          </li>
                          <li class="list-group-item list-group-item-info mt-1"
                              v-for="book_1 in getBook_1"
                              :key="book_1.id"
                            >
                            {{ book_1.line }}
                          </li>                      
                        </div>

                        <div v-show="currentPage === 1">
                          <li class="list-group-item header">
                              <h6 class="text-center"> Capter 2</h6>
                          </li>
                          <li class="list-group-item list-group-item-info mt-1"
                              v-for="book_2 in getBook_2"
                              :key="book_2.id"
                              >
                            {{ book_2.line }}
                          </li>                     
                        </div>
                        
                        <div  v-show="currentPage === 2">
                          <li class="list-group-item header">
                              <h6 class="text-center"> Capter 3</h6>
                          </li>
                          <li class="list-group-item list-group-item-info mt-1"
                              v-for="book_3 in getBook_3"
                              :key="book_3.id"
                              >
                            {{ book_3.line }}  
                          </li>                     
                        </div> 
                      </ul>  
                    </div>
                </div>   
           </div>   
    </div>
  </div>
</template>

<script>
import baseButton from '../components/base/baseButton.vue'
import { mapGetters } from "vuex";
export default {
  name: 'About',
  data: () => {
    return {
      currentPage: 0
    }
  },
  components: {
    baseButton
  },
  computed: {
    ...mapGetters(['getBook_1', 'getBook_2', 'getBook_3'])
  },
  methods: {
    pagePlus () {
      if(this.currentPage < 2) {
        this.currentPage++
      }
    },
    pageMinus () {
      if(this.currentPage > 0) {
        this.currentPage--
      }
    }
  }
}
</script>

<style scoped>
li{
  text-align: center;
  background: black;
  color: white;
}
.header{
  color: white;
  background: red;
}
</style>
