<template>
    <div class="card" @click="$emit('click')">
        <div class="card-body">
            <h5>{{title}}</h5>
            <slot name="content" class="card-text"></slot>
            <div id="cardIcon">
                <i :class="icon"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:"Card",
    props:{
        title:{
            type:String,
        },
        icon:{
            type:String,
            default:null,
        }
    }
}
</script>
<style>
.card{
    margin-bottom:1rem;
    box-shadow:-2px 3px 4px  #222;
    cursor:pointer;
}
.card:hover{
    box-shadow:-2px 4px 12px  #222;
    transition:all .5s ease;
}
#cardIcon{
    font-size:3rem;
    text-align:center;
    text-shadow:-3px 3px 8px #444;
}
</style>
