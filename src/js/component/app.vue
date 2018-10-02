<template>
    <section id="app" class="app">
        <TopNav />
        <div class="app__content">
            <Splash
                v-if="!showsListWasUpdated"
                :isSupported="recorder !== null" />
            <Search
                v-else-if="query"
                :query="query" />

            <div v-if="isFailure">
                <h1>Oh no :(</h1>
                <p>{{ recommendations.data.error }}</p>
            </div>

            <section class="show-list">
                <div class="show-list__loader" v-if="isLoading">
                    <p>Loading shows list...</p>
                </div>
                <div class="show-list__empty content" v-if="noMovies">
                    No shows found.
                </div>
                <div v-if="isSuccess && recommendations.data.shows.length > 0">
                    <ShowItem
                        v-for="show in recommendations.data.shows"
                        v-bind:show="show"
                        v-bind:key="show.name" />
                </div>
            </section>
        </div>
        <Recorder
            v-if="recorder"
            :isRecording="isRecording"
            @start-recording="startRecording" />
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as actions from '../store/actions-list'

    import SpeechRecognition from '../service/speech-recognition'
    import TopNav from './top-nav.vue'
    import Splash from './splash.vue'
    import Search from './search.vue'
    import Recorder from './recorder.vue'
    import ShowItem from './show-item.vue'

    export default {
        components: {
            TopNav,
            Splash,
            Search,
            Recorder,
            ShowItem,
        },
        computed: {
            ...mapGetters({
                recommendations: 'recommendations',
                recorder: 'recorder',
                isInitialised: 'isInitialised',
                isRecording: 'isRecording',
                isLoading: 'isLoading',
                isSuccess: 'isSuccess',
                isFailure: 'isFailure',
                showsListWasUpdated: 'showsListWasUpdated',
                query: 'query',
            }),
            query () {
                if (this.isLoading && this.recommendations.data) {
                    return this.recommendations.data.query
                }

                if (this.isSuccess && this.recommendations.data.query) {
                    return this.recommendations.data.query
                }
            },
            noMovies () {
                return this.isSuccess && this.recommendations.data.shows.length === 0
            }
        },
        methods: {
            startRecording() {
                this.$store.dispatch(actions.START_RECORDING);
            }
        },
        mounted() {
            const speechRecognition = SpeechRecognition.detect(window)

            if (!speechRecognition) {
                return
            }

            this.$store.dispatch(
                actions.SPEECH_RECOGNITION_DETECTED,
                { recorder: speechRecognition }
            )
        }
    }
</script>