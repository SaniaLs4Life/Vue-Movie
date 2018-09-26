<template>
    
        <div class="card">
            <router-link :to="moviePath">
                <poster :posterName="movie.poster_path" class="card-img-top" :alt="movie.original_title"/>
            </router-link>
            <div class="card-body">
            <h5 class="card-title">{{ movie.original_title }}</h5>
            <p class="card-text">{{ movie.overview }}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Average rating: {{ movie.vote_average.toFixed(1) }}</small>
            </div>
        </div>
</template>
<script>
import Poster from './Poster'
export default {
    name: 'Movie',
    props: {
        movie: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {}
    },
    computed: {
        moviePath() {
            return `/movie/${this.movie.id}`
        }
    },
    components: {
        Poster,
    }
}
</script>

<style>
    .card {
        border:1px solid #EEE;
        border-radius:10px;
    }
</style>

