<template>
    <section id="app" class="app">
        <top-nav></top-nav>
        <div class="app__content">
            <splash></splash>
            <search></search>
            <movies-list></movies-list>
        </div>
        <recorder></recorder>
    </section>
</template>

<script>
    import MoviesList from './movies-list.vue'
    import Recorder from './recorder.vue'
    import Search from './search.vue'
    import Splash from './splash.vue'
    import TopNav from './top-nav.vue'

    export default {
        components: {
            MoviesList,
            Recorder,
            Search,
            Splash,
            TopNav
        }
    }
</script>