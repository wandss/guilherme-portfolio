<template>
    <div id="card">
        <div id="image">
            <slot name="image"></slot>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default{

    name:'CardContainer',
    props:{
        hasImage:{type:Boolean},
    },
}
</script>
<style scoped>
#card{
    padding:0;
    background-color:rgba(0,0, 0, .4);
    /*background-color:rgba(255,255, 255,1)*/;
    border:rgba(333,333,333, .3) 1px;
    position:fixed;
    max-width:80vw;
}
#image{
    float:left;
    height:auto;
    max-width:80vw;
    overflow:auto;
    margin-right:1rem;
}
</style>
