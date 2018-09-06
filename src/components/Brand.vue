<template>
    <div  id="brand">
        <router-link to="/" id="link">
            <h1>{{title}}</h1>
            <h1>{{subtitle}}</h1>
        </router-link>
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
#link{
    text-decoration:none;
}
h1{
    /*color:#BCBFBF;*/
    color:rgba(185, 100, 35, 1);
    text-shadow:10px 15px 8px black;
    cursor:default;
    font-family:indie-flower, arial, sans-serif;
    font-size:3rem;
    /*TODO
    Make Brand a link to root url's page
    Use diferent font
    /*Change shadow from title based on event???*/


}
#brand{
    margin-bottom:5rem;
}
</style>
