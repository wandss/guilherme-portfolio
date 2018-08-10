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
    },
}

/*
https://api.instragram.com/oauth/authorize/?client_id=CLIENT_ID&redirect_uri=https://www.google.com&response_type=token
https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=ACCESS_TOKEN
*/
</script>

<style>
@import './assets/css/bootstrap.min.css';
body{
    color:#9A9A9A;
    /*background:linear-gradient(180deg, rgba(35,35,35,1), rgba(120,120,120,.7),rgba(35,35,35,1));*/
    background:linear-gradient(180deg, rgba(35,35,35,1), rgba(35,35,35,1));
    height:100%;
}
</style>
