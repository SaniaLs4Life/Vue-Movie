<template>
    <section>
        <loader v-if="isLoading" />
        <section v-if="hasData">
            <BackDropImage :imageName="movieDetails.backdrop_path"></BackDropImage>
            <div class="container pt-5">
                <div class="row">
                    <div class="col-sm-4 details">
                        <Poster :posterName="movieDetails.poster_path" />
                    </div>
                    <div class="col-sm-8 details">
                        <h2>{{ movieDetails.title }}</h2>
                        <p>{{ movieDetails.overview }}</p>
                        <div>Runtime: {{ runTime }}</div>
                        <div>Average Rating: {{ movieDetails.vote_average.toFixed(1) }}</div>
                        <div>Production Companies: 
                            <span v-for="company in movieDetails.production_companies" :key="company.id">{{ company.name }} | </span>
                        </div><br>
                        <div>Release Date : {{ movieDetails.release_date }}</div>
                        <h4 class="mt-3">Cast</h4>
                        <img style="margin-bottom:20px;" v-for="cast in movieDetails.cast" :key="cast.id" :src="castAvatar(cast.profile_path)" draggable="false" class="cast-avatar">
                        <h4 class="mt-3">Trailers</h4>
                        <a v-for="trailer in trailers" :key="trailer.id" :href="trailer.url" class="trailer" target="_blank">
                            <span></span>
                            <img :src="trailer.thumbnail"  />
                        </a>
                        <a :href="ticketPath" class="btn btn-success ticket-btn">Get Tickets</a>

                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import Loader from './Loader'
import BackDropImage from './BackDropImage'
import Poster from './Poster'
export default {
    name: 'MovieDetail',
    data() {
        return {
            isLoading: true,
            hasData: false,
        }
    },
    methods: {
        castAvatar(path) {
            return `https://image.tmdb.org/t/p/w45${path}`
        }
    },
    created() {        
        this.$store.dispatch('fetchMovieDetails', this.movieId).then((snapshot) => {
            this.isLoading = false
            this.hasData = true
        })
    },
    computed: {
        movieId() {
            return this.$route.params.id
        },
        movieDetails() {
            return this.$store.state.movieDetails[this.movieId]
        },
        runTime() {
            const hours = Math.floor(this.movieDetails.runtime / 60)
            const minutes = this.movieDetails.runtime % 60
            return `${hours}h ${minutes}m`
        },
        trailers() {
            const trailers = []
            this.movieDetails.videos.results.forEach((video) => {
                if(video.type === 'Trailer') {
                    trailers.push({
                        thumbnail: `https://i.ytimg.com/vi/${video.key}/sddefault.jpg`,
                        url: `https://youtube.com/watch?v=${video.key}`,
                    })
                }
            })
            return trailers
        },
        ticketPath() {
            return `/movies/tickets/${this.movieId}`
        }
        
    },
    components: {
        Loader,
        BackDropImage,
        Poster,
    }
}
</script>

<style>
    .details {
        color:#FFF;
        text-shadow: 2px 2px #000;
    }   
    .cast-avatar {
        width:50px;
        height:50px;
        border-radius:25px;
        border:2px solid #FFF;
        text-shadow: 2px 2px #000;
        box-sizing: border-box;
        margin-right:5px;
    }
    .trailer {
        width: 150px;
        height: 110px;
        display: inline-block;
        margin-right: 20px;
        position: relative;
    }
    .trailer img{
        width:100%;
        height:100%;
    }
    .trailer span {
        background-image: url('https://f.acet.me/LXIk.png');
        background-size: 75px 75px;
        position: absolute;
        width:75px;
        height:75px;
        top:18px;
        left:36px;
        display: block;
    }
    .ticket-btn {
        position: absolute;
        top:0;
        right:25px;
        outline:none;
    }
</style>

