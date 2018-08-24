<template>
    <Overlay :show="showImage">
        <span @click="$emit('click')" class="closebtn">
            &times;
        </span>
        <div>
            <div class="image">
                <div class="imageCounter">{{index+1}}/{{imageCount}}</div>
                <img :src="image.src" />
            </div>
            <div class="prev" v-if="index > 0"
             @click="prev">
                &#10094;
            </div>
            <div class="next" v-if="index !== imageCount-1"
             @click="next">
                &#10095;
            </div>
        </div>

    </Overlay>
</template>
<script>
import Overlay from './Overlay.vue';
export default{
    name:'ImageViewer',
    props:{
        showImage:{
            type:Boolean,
            default:false,
        },
        image:{
            type:Object,
        },
        imageCount:{
            type:Number,
        },
        index:{
            type:Number,
        }
    },
    methods:{
        next(){
            if(this.index !== this.imageCount -1){
                this.$emit('click')
                this.$emit('nextImage', this.index+1)
            }
        },
        prev(){
            if(this.index > 0){
                this.$emit('click')
                this.$emit('prevImage', this.index-1)

            }
        }
    }
}
</script>
<style scoped>

.closebtn{
    color: white;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
    cursor:pointer;
}
.content{
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 90%;
    max-width: 1200px;
}
.imageCounter{
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
}
img{
    width:90vw;
    height:50%;
    margin-left:5vw;
    overflow:scroll;
}
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
}
.next{
    right:0;
}
.prev:hover,
.next:hover {
    font-size:4rem;
}
</style>
