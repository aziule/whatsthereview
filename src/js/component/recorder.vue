<template>
    <div class="recorder"
        v-bind:class="{
            'recorder--recording': isRecording
        }">
        <button
            class="recorder__record-btn"
            @click="startRecording">
            <div class="recorder__record-btn__content" v-if="!isRecording">
                <span class="material-icons recorder__record-btn__content__icon">mic</span>
                Start recording
            </div>
            <div class="recorder__record-btn__content" v-if="isRecording">
                <span class="material-icons recorder__record-btn__content__icon">fiber_manual_record</span>
                Recording...
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
            isRecording: 'isRecording'
        })
    }
</script>

<style>
</style>
