<template>
    <div class="bar">
        <div class="container">
            <line-chart></line-chart>
        </div>
    </div>
</template>

<script>
import LineChart from './LineChart.vue'
export default {
    name: 'Line',
    components: {
        LineChart
    }
}
</script>