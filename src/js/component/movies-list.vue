<template>
    <div class="movies-list">
        <movie-item
            v-for="movie in movies"
            v-bind:movie="movie"
            v-bind:key="movie.name">
        </movie-item>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import MovieItem from './movie-item.vue'

    export default {
        computed: mapGetters({
            movies: 'allMovies'
        }),
        components: {
            MovieItem
        }
    }
</script>

<style>
</style>
