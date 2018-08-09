<template>
    <div>
        <img :alt="alt" src="../assets/image/sampleImage.jpg"
         :width="width" :height="height"
        />
    </div>
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
        }
    }
</script>
<style scoped>
img{
margin:0;
}

</style>

