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
            src:{
                type:String,
                default:"../assets/image/sampleImage.jpg",
            },
            test:{
                type:String,
                default:"https://scontent.cdninstagram.com/vp/7307755bc47096c0029c9165e489998b/5C0FC331/t51.2885-19/s150x150/28752690_2067402746853687_3089063405542178816_n.jpg"
            }
        }
    }
</script>
<style scoped>
img{
margin:0;
}

</style>

