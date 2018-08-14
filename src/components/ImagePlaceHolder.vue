<template>
    <img :alt="alt" :src="src"
     :width="width" :height="height"
    />
</template>
<script>
    export default{
        name:'ImagePlaceHolder',
        props:{
            width:{},
            height:{
                default:"10%",
            },
            alt:{
                type:String,
            },
            src:{
                type:String,
            },
        }
    }
</script>
<style scoped>
img{
margin:0;
}

</style>

