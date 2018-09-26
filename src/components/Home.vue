<template>
    <section>
        <app-header />
        <loader v-if="isLoading" />
        <section class="container py-5">
            <div class="card-deck" v-for="group in groupedMovies" :key="group.id">
                <movie  v-for="movie in group" :key="movie.id" :movie="movie"/>
            </div>
        </section>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from './AppHeader'
import Loader from './Loader'
import Movie from './Movie'
export default {
    name: 'Home',
    data() {
        return {
            isLoading: true
        }
    },
    components: {
        AppHeader,
        Loader,
        Movie
    },
    created() {
        this.$store.dispatch('fetchMovies').then(() => {
            this.isLoading = false
        })
    },
    computed: {
        ...mapGetters([
            'movies',
            'groupedMovies'
        ])
    }
}
</script>
<style>
    .card-deck {
        margin-bottom:30px;
    }
</style>

