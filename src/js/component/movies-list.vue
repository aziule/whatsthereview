<template>
    <div class="movies-list">
        <div v-for="m in movies">
            <div>{{ m.name }}</div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            movies: 'allMovies'
        })
    }
</script>

<style>
</style>
