<template>
    <section id="app" class="app">
        <search></search>
        <movies-list></movies-list>
        <recorder></recorder>
    </section>
</template>

<script>
    import MoviesList from './movies-list.vue'
    import Recorder from './recorder.vue'
    import Search from './search.vue'

    export default {
        components: {
            Recorder,
            MoviesList,
            Search,
        }
    }
</script>

<style>
</style>
