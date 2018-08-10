<template>
    <div id="card" class="container-fluid">
        <div class="row">
            <div class="col-md-12">
        <div id="image">
            <slot name="image"></slot>
        </div>
        <div>
            <slot name="content"></slot>
        </div>
        </div>
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
    margin-bottom:1.2rem;
    background-color:rgba(0,0, 0, .9);
    /*background-color:rgba(255,255, 255,1)*/;
    border:rgba(333,333,333, .3) 1px;
    max-width:80vw;
}
#image{
    float:left;
    height:auto;
    max-width:100%;
    overflow:auto;
    margin-right:1rem;
}
</style>
