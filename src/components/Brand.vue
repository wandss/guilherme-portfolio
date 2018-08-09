<template>
  <div class="row" id="brand">
      <div class="col-md-12">
          <h1>
              {{title}}
          </h1>
          <h1>
              {{subtitle}}
          </h1>

      </div>
  </div>
</template>

<script>
    export default {
        name: 'Brand',
        props:{
            title:{
                type:String,
                required:true,
            },
            subtitle:{
                type:String,
            }
            ,
        },

    }
</script>

<style scoped>
h1{
    color:#BCBFBF;
    text-shadow:10px 15px 8px #111;
    cursor:default;
    font-family:arial, sans-serif;
    /*TODO
    Make Brand a link to root url's page
    Use diferent font
    /*Change shadow from title based on event???*/


}
#brand{
    margin-bottom:5rem;
}
</style>
