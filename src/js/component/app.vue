<template>
    <div id="app">
        <movies-list></movies-list>
        <recorder></recorder>
    </div>
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
