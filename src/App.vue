<template>
  <div class="container">
      <NavBar />
      <MainContainer />

  </div>
</template>

<script>
import MainContainer from './mainContainer'

export default {
    name: 'app',
    components: {
        MainContainer
    },
}

</script>

<style>
@import './assets/css/bootstrap.min.css';
body{
    color:#9A9A9A;
/*    background:linear-gradient(180deg, rgba(35,35,35,1), rgba(120,120,120,.7));*/
/*    background:linear-gradient(180deg, rgba(55,55,55,1),
rgba(35,35,35,.4));*/
    background-color:#343434;
    height:100vh;
}
</style>
