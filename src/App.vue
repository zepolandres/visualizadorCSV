<template>
  <dashboardPage/>
</template>

<script>

import MostrarGrafico from '@/components/MostrarGrafico';
import CargarArchivo from '@/components/CargarArchivo';
import dashboardPage from '@/views/dashboardPage';

export default {
  name: 'App',
  components: {
    dashboardPage,
    CargarArchivo,
    MostrarGrafico
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
