<template>
    <div class="form-group">
        <label>{{label}}</label>
        <textarea class="form-control"
         :rows="rows" :required="required"
         @input="$emit('input', $event.target.value)" />
    </div>
</template>
<script>
export default{
    name:'AppTextArea',
    props:{
        label:{
            type:String,
        },
        rows:{
            type:Number,
            default:5,
        },
        required:{
            type:Boolean,
            default:false,
        },
    }
}
</script>
<style>
textarea{
    max-width:100%;
}
</style>
