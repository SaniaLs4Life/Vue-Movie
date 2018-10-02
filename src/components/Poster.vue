<template>
    <img draggable="false" :src="posterPath" >
</template>

<script>
export default {
    name: 'Poster',
    props: {
        posterName: {
            type: String,
            required: true
        }
    },
    computed: {
        posterPath() {
            return `https://image.tmdb.org/t/p/w500/${this.posterName}`
        }
    }
}
</script>

<style scoped> 
    .card {
        width: 100%;
    }
    img {
        width:100%;
        height:600px;
    }
</style>


