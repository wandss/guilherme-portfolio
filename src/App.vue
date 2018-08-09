<template>
  <div class="container">
      <MainContainer />

  </div>
</template>

<script>
import MainContainer from './mainContainer'

export default {
    name: 'app',
    components: {
        MainContainer
    }
}
</script>

<style>
@import './assets/css/bootstrap.min.css';
body{
    color:#9A9A9A;
    background:linear-gradient(70deg, rgba(35,35,35,1),  rgba(255,255,255,0));
    height:100vh;
}
</style>
