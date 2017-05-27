<template>
    <section id="app" class="app container">
        <movies-list></movies-list>
        <recorder></recorder>
    </section>
</template>

<script>
    import MoviesList from './movies-list.vue'
    import Recorder from './recorder.vue'

    export default {
        components: {
            Recorder,
            MoviesList
        }
    }
</script>

<style>
</style>
