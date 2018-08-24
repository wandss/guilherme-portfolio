<template>
    <div class="col-sm-4" @click="$emit('click')" id="container">
        <div id="card" :style="[rotateCard,]">
            <slot name="img"></slot>
            <slot name="desc" id="desc"></slot>
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
        computed:{
            rotateCard(){
                var num = Math.floor(Math.random()*7)
                num *= Math.floor(Math.random()*2) == 1? 1:-1;

                return {'transform':'rotate('+num+'deg)'};
            }
        }
    }

</script>

<style scoped>
#container{
    cursor:pointer;
}
#card{
    border:#9A9A9A 1px solid;
    background-color:#FFF;
    padding:0.4rem 1rem 2rem 1rem;
    box-shadow:-3px 9px 14px 1px #111;
    border-radius:2px;
    max-width:300px;
    overflow:auto;
}
#card:hover{
    box-shadow:-10px 15px 20px 1px black;
    transform:scaleY(20);
    transition:all .2s ease-in;
}
#img{
    border:dashed gray 1px;
    position:relative;
    width:100%;
}
#desc{
    position:relative;
}

</style>
