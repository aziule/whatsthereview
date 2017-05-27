<template>
    <section class="movies-list">
        <div class="movies-list__loader" v-if="isLoading">
            <p>Loading movies list...</p>
        </div>
        <div class="content" v-if="error !== null">
            <h1>Oh no :(</h1>
            <p>{{ error }}</p>
        </div>
        <movie-item
            v-for="movie in movies"
            v-bind:movie="movie"
            v-bind:key="movie.name">
        </movie-item>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    import MovieItem from './movie-item.vue'

    export default {
        computed: mapGetters({
            movies: 'allMovies',
            isRecording: 'isRecording',
            isLoading: 'isLoading',
            error: 'moviesListError'
        }),
        components: {
            MovieItem
        }
    }
</script>

<style>
</style>
