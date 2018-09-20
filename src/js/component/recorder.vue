<template>
    <div class="recorder"
        v-bind:class="{
            'recorder--recording': isRecording
        }"
        >
        <button
            class="recorder__record-btn"
            @click="$emit('startRecording')">
            <div v-if="isRecording" class="recorder__record-btn__content">
                <span class="material-icons recorder__record-btn__content__icon">mic</span>
                Listening to you
            </div>
            <div v-else class="recorder__record-btn__content">
                <span class="material-icons recorder__record-btn__content__icon">search</span>
                Look for a movie
            </div>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
          isRecording: {
            type: Boolean,
            required: true
          },
        }
    }
</script>
