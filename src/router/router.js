import Home from '../components/Home.vue'
import MovieDetail from '../components/MovieDetail.vue'

export default {
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/movie/:id',
            component: MovieDetail,
            name: 'MovieDetail'
        }
    ],
    mode: 'history'
}