<template>
    <div>
        <div class="input-group btn btn-outline-secondary">
            <span>
                <i class="fa fa-upload"></i>
            </span>
            <label :for="label"> {{label}}</label>
            <input :type="type" :id="label" :required="required"
             @change="$emit('change', $event.target.files)"
            >
        </div>
            <p v-if="filename!==null">
             {{filename[0].name}}
            </p>
        </div>
</template>
<script>
export default{
    name:'Upload',
    model:{
        event:'change',
    },
    props:{
        label:{
            type:String,
            default:'Upload',
            required:true,
        },
        required:{
            type:Boolean,
            default:false
        },
        filename:{
            default:'',
        }
    },
    data(){
        return{
            type:"file"
        }
    },
    methods:{
        handleChange(e){
            console.log(e.target)
            this.$emit('change', e.target.files)
            e.target.files=null;
        }
    }
}
</script>
<style scoped>
input{
    opacity:0;
}
</style>
