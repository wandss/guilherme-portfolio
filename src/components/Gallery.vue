<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <h4>{{title}}</h4>
                <img v-if="images.length>0" v-for="image in images" @click="selectImage(image)"
                 :key="image.uuid" width="240" height="180"
                 :class="{'selectedImage':isSelected(image.uuid)}"
                 :src="image.image_url" :alt="image.name" :title="image.name"
                 />
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name:'Gallery',
    props:{
        images:{
            type:Array,
            required:true,
            default:()=>[],
        },
        title:{
            type:String,
        },
    },
    data(){
        return{
            selectedImages:[],
        }
    },
    methods:{
        selectImage(image){
            const index = this.selectedImages.map(img=>
                img.uuid).indexOf(image.uuid)
            index===-1?this.selectedImages.push(image):
                this.selectedImages.splice(index,1)
            this.$emit('click', this.selectedImages)
        },
        isSelected(uuid){
            return this.selectedImages.filter(image=>
                image.uuid===uuid).length!==0
        }

    },
}
</script>
<style scoped>
img{
    cursor:pointer;
}
.selectedImage{
    -webkit-filter:grayscale(100%);
    filter:grayscale(100%);
}
</style>
