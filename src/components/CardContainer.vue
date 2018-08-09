<template>
    <div id="card" class="row">
        <div id="image" v-if="hasImage">
            <slot name="image"></slot>
        </div>

        <div id="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default{
    name:'CardContainer',
    props:{
        hasImage:{type:Boolean},
    }
}
</script>
<style scoped>
#card{
    padding:0;
    background-color:rgba(131,200, 157, .4);
    border:rgba(333,333,333, .3) 1px;
}
#image{
    height:auto;
    display:inline-block;
    float:left;
    width:40%;
    max-width:100vw;
    overflow:scroll;
}
#content{
    width:60%;
    color:black;
    display:inline-block;
    font-size:2rem;
    padding-left:1rem;
    padding-top:2rem;
}

</style>
