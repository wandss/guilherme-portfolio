<template>
    <transition name="fade">
        <div :class="['alert', 'alert-'+cssClass,]" v-show="showAlert">
            <a class="close" @click="$emit('close')">
                &times;
            </a>
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default{
        name:'Alert',
        props:{
            cssClass:{
                type:String,
                default:'success'
            },
            showAlert:{
                type:Boolean,
                default:false,
                required:true,
            }
        },
        data(){
            return{
                show:false
            }
        },
    }
</script>
<style scoped>
.alert{
    box-shadow:-2px 10px 20px 3px #111;
}
.fade-enter-active, .fade-leave-active{
    transition:all .5s ease-in-out;
}
.fade-enter, .fade-leave-to{
    transform:translate(-50rem);
    opacity:0;
}
</style>
