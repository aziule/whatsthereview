<template>
    <section id="app" class="app">
        <lang-selector></lang-selector>
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
    import LangSelector from './lang-selector.vue'

    export default {
        components: {
            LangSelector,
            MoviesList,
            Recorder,
            Search,
            Splash
        }
    }
</script>