<template>
    <div class="form-group">
        <input type="checkbox" :id="label"
         @change="$emit('input', $event.target.checked)"
        />
        <label :for="label"> {{label}}</label>
    </div>
</template>
<script>
export default{
    name:'AppCheckbox',
    props:{
        label:{
            type:String,
            default:'Label Name Here',
            required:true,
        }
    },
    methods:{
        handleInput(e){
            console.log(e.target.checked)
            this.$emit('input', e.target.checked)
        }
    }
}
</script>
<style scoped>
input{
    appearance:none;
    outline:none;
    display:inline-block;
    margin-right:.5rem;
    background-color:#fafafa;
    border:solid 1px #cacece;
    height:1rem;
    width:1rem;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
    position:relative;
}
input:checked, input:checked:active{
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
}
input:checked{
    background-color: #e9ecee;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
    color: #99a1a7;
}
input:checked:after{
    content: '\2714';
    font-size: 20px;
    position: absolute;
    top:-10px;
    left:0px;
    /*color: #99a1a7;*/
    /*color:#56ad79;*/
    color:rgba(76, 196, 102, 1);
    position:absolute;
}
</style>
