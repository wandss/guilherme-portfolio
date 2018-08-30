<template>
    <div class="form-group">
        <label>{{label}}</label>
        <input class="form-control" :type="type" />
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
        }
    }
}
</script>
<style>
</style>
