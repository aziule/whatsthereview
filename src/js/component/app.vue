<template>
    <section id="app" class="app">
        <TopNav/>
        <div class="app__content">
            <Splash v-if="recommendations.type === 'initial'" :is-supported="recorder"/>
            <Search v-else-if="query" :query="query"/>

            <div v-if="recommendations.type === 'loading'" class="movies-list__loader">
                <p>Loading movies list...</p>
            </div>
            <div v-else-if="recommendation.type === 'failure'">
                <h1>Oh no :(</h1>
                <p>{{ recommendation.type.data }}</p>
            </div>

            <template v-if="recommendations.type === 'success'">
              <div v-if="recommendations.data.movies.length > 0">
                <MovieItem
                  v-for="movie in movies"
                  :movie="movie"
                  :key="movie.name"/>
              </div>
              <div v-else class="movies-list__empty content">
                No movies found.
              </div>
            </template>
        </div>

        <Recorder
          v-if="recorder"
          :is-recording="recommendations.type === 'recording'"
          @start-recording="startRecording"
          />
    </section>
</template>

<script>
    import MoviesList from './movies-list.vue'
    import Recorder from './recorder.vue'
    import Search from './search.vue'
    import Splash from './splash.vue'
    import TopNav from './top-nav.vue'

    import { mapGetters } from 'vuex'

    export default {
        components: {
            MoviesList,
            Recorder,
            Search,
            Splash,
            TopNav
        },
        mounted() {
          const speechRecognition = SpeechRecognition.detect(window)

          if (SpeechRecognition) {
            this.$store.dispatch(
              actions.SPEECH_RECOGNITION_DETECTED,
              {recorder: speechRecognition}
            )
          }
        }
        computed: {
          query: this.recommendations.type === 'loading' && this.recommendations.data
            || this.recommendations.type === 'success' && this.recommendations.data.query,

          noMovies() {
            return this.recommendations.type === 'success' && this.recommendations.data.movies.length === 0
          }

          ...mapGetters({
            recommendations: 'recommendations'
            recorder: 'recorder'
          })
        }

      methods: {
          startRecording() {
              this.$store.dispatch(actions.START_RECORDING);
          }
      }

    }
</script>
