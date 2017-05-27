<template>
    <section id="app" class="app">
        <splash></splash>
        <search></search>
        <movies-list></movies-list>
        <recorder></recorder>
    </section>
</template>

<script>
    import MoviesList from './movies-list.vue'
    import Recorder from './recorder.vue'
    import Search from './search.vue'
    import Splash from './splash.vue'

    export default {
        components: {
            Recorder,
            MoviesList,
            Search,
            Splash
        }
    }
</script>

<style>
</style>
