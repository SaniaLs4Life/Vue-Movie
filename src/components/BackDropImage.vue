<template>
    <img :src="backDropImage" class="backdrop-image">
</template>
<script>
export default {
    name: 'BackDropImage',
    props: {
        imageName: String,
        required: true,
    },
    computed: {
        backDropImage() {
            return `https://image.tmdb.org/t/p/w500/${this.imageName}`
        }
    }
}
</script>
<style scoped=true>
    .backdrop-image {
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        left:0;
        filter: blur(20px);
    }
</style>

