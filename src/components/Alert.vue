<template>
    <div class="row">
        <div class="col">
            <transition name="fade">
                <div :class="['alert', 'alert-'+cssClass,]" v-show="showAlert">
                    <a v-if="hasCloseButton" class="close" @click="$emit('close')">
                        &times;
                    </a>
                    <slot></slot>
                </div>
            </transition>
        </div>
    </div>
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
            },
            hasCloseButton:{
                type:Boolean,
                default:true,
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
    box-shadow:-1px 3px 8px 1px #111;
}
.fade-enter-active, .fade-leave-active{
    transition:all .5s ease;
}
.fade-enter, .fade-leave-to{
    transform:translateY(-1rem);
    opacity:0;
}
</style>
