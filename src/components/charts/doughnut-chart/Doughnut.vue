<template>
    <div class="doughnut">
        <h3 class="text-center mt-5">Europe countries</h3>
        <div class="container mt-5">
            <h6 class="text-center mt-5 mb-5">Comparition diagram of europe countries</h6>
            <DoughnutChart

                />
        </div>
    </div>
</template>

<script>
import DoughnutChart from './DoughnutChart.vue'

export default {
    name: 'Doughnut',
    components: {  
        DoughnutChart
    }
}
</script>