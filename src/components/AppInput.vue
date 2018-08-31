<template>
    <div class="form-group">
        <label>{{label}}</label>
        <input class="form-control" :type="type"
         @input="$emit('input', $event.target.value)"
         :required="required"/>
    </div>
</template>
<script>
export default{
    name:'AppInput',
    props:{
        label:{
            type:String,
        },
        type:{
            type:String ,
            default:'text',
        },
        required:{
            type:Boolean,
            default:false,
        },
    }
}
</script>
<style>
</style>
