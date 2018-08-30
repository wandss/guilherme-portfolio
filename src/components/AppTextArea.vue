<template>
    <div class="form-group">
        <label>{{label}}</label>
        <textarea class="form-control"
         :rows="rows"/>
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
        }
    }
}
</script>
<style>
textarea{
    max-width:100%;
}
</style>
