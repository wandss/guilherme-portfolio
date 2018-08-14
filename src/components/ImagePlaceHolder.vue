<template>
    <div id="image" class="col-sm-4">
        <img :alt="alt" :src="src"
         :width="width" :height="height"
         @click="$emit('click')"           
        />
        <h3 id="description">
            {{description}}
        </h3>
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
            },
            description:{
                type:String,
            },
        }
    }
/*TODO:
On mouse over change width and height????

*/
</script>
<style scoped>
#image{
    padding-top:1rem;
    padding-bottom:1rem;
    text-align:center;
    color:#049;
}
img{
    box-shadow:1px 1px 30px 4px black;
    cursor:pointer;
}
img:hover{
    box-shadow:1px 1px 30px 10px black;
}
#description{
    margin-top:1rem;

}
</style>

