<template>
    <section class="movies-list">
        <div class="movies-list__loader" v-if="isLoading">
            <p>Loading movies list...</p>
        </div>
        <div class="content" v-if="error !== null">
            <h1>Oh no :(</h1>
            <p>{{ error }}</p>
        </div>
        <div class="movies-list__empty content" v-if="movies.length === 0 && searchQuery && !error && wasUpdated">
            No movies found.
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
            searchQuery: 'currentQuery',
            isRecording: 'isRecording',
            isLoading: 'isLoading',
            error: 'moviesListError',
            wasUpdated: 'moviesListWasUpdated'
        }),
        components: {
            MovieItem
        }
    }
</script>

<style>
</style>
