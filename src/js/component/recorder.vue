<template>
    <div class="recorder">
        <div class="recorder__loader"></div>
        <button
            class="recorder__record-btn"
            @click="startRecording">
            {{ isRecording ? 'Please wait...' : 'Start recording' }}
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
