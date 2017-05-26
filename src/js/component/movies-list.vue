<template>
    <div
        class="movies-list"
        v-bind:class="{
            'movies-list--faded': isRecording,
            'movies-list--loading': isLoading
        }">
        <div class="movies-list__loader">Loader</div>
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
            movies: 'allMovies',
            isRecording: 'isRecording'
        }),
        components: {
            MovieItem
        }
    }
</script>

<style>
</style>
