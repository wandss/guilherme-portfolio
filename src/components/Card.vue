<template>
    <div :class="'col-md-'+size" id="card">
        <span class="col-md-4" v-if="hasImage" id="img">
            <slot name="image"></slot>
        </span>
        <div class="col-md-8" id="text">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props:{
            size:{
                type:String,
                default:'3',
            },
            hasImage:{type:Boolean},
        },
    }
</script>

<style>
#card{
    border:#9A9A9A 1px solid;
    background-color:#FFF;
    padding:2rem 1rem 2rem 1rem;
    box-shadow:-3px 8px 20px 1px #333;
    border-radius:2px;
}
#img{
    border:dashed gray 1px;
}
#text{
    color:black;
}
</style>
