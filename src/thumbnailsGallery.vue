<template>
    <div>
      <ImagePlaceHolder v-for="album in albums" :key="album.uuid"
       width="280" height="200"
       :src="album.thumbnail_data.src"
       :description="album.description"
       @click="$emit('albumDetail', album.uuid)"
      />
    </div>
</template>
<script>
export default{
    name:'ThumbnailsGallery',
    props:{
        albums:{type:Array,
            required:true,
        }
    },
}
</script>
<style>
</style>
