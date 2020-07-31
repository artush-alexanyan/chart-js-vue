<template>
  <div class="bar">
    <h6 class="text-center mt-5">Comparition europe countries by areas</h6>
    <div class="container" style="margin-top: 120px;">
      <bar-chart></bar-chart>
    </div>
  </div>
</template>

<script>
import BarChart from './BarCart.vue'

export default {
  name: 'Bar',
  components: {
    BarChart
  }
}
</script>