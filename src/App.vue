<template>
  <div id="app">
    <div class="container-fluid mt-3">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <router-link tag="li" to="/" class="breadcrumb-item">Home</router-link>
          <router-link tag="li" to="/filter" class="breadcrumb-item">Filter</router-link>
          <router-link tag="li" to="/about" class="breadcrumb-item">About</router-link>          
          <router-link tag="li" to="/line" class="breadcrumb-item">Line</router-link>          
          <router-link tag="li" to="/doughnut" class="breadcrumb-item">Doughnut</router-link>          
          <router-link tag="li" to="/bar" class="breadcrumb-item">Bar</router-link>          
        </ol>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
li.active-router{
  color: tomato;
}
li{
  color: white;
  cursor: pointer;
}
.breadcrumb{
  background: black;
}
</style>
