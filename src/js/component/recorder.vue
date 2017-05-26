<template>
    <div class="recorder">
        <div class="recorder__loader"></div>
        <button class="recorder__record-btn" @click="startRecording">Start recording</button>
    </div>
</template>

<script>
    import * as actions from '../store/actions-list'

    export default {
        methods: {
            startRecording() {
                this.$store.dispatch(actions.START_RECORDING);
            }
        }
    }
</script>

<style>
</style>
