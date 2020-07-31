<template>
        <button
            @click="onClick" 
            class="btn btn-primary" 
            >
          <slot></slot>
        </button>        
</template>

<script>
export default {
    name: 'baseButton',
    props: {
        onClick: Function,
    }
}
</script>

<style scoped>
.btn{
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: blue;
  font-size: 15px;
}
</style>