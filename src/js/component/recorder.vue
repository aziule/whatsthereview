<template>
    <div class="recorder"
        v-bind:class="{
            'recorder--recording': isRecording
        }"
        v-if="isSupported">
        <button
            class="recorder__record-btn"
            @click="startRecording">
            <div class="recorder__record-btn__content" v-if="!isRecording">
                <span class="material-icons recorder__record-btn__content__icon">search</span>
                Look for a movie
            </div>
            <div class="recorder__record-btn__content" v-if="isRecording">
                <span class="material-icons recorder__record-btn__content__icon">mic</span>
                Listening to you
            </div>
        </button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import * as actions from '../store/actions-list'

    export default {
        methods: {
            startRecording() {
                this.$store.dispatch(actions.START_RECORDING);
            }
        },
        computed: mapGetters({
            isRecording: 'isRecording',
            isSupported: 'isRecorderSupported'
        })
    }
</script>
