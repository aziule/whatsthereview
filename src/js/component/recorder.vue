<template>
    <div class="recorder"
        :class="{
            'recorder--recording': isRecording
        }">
        <button class="recorder__record-btn" @click="$emit('start-recording')">
            <div class="recorder__record-btn__content" v-if="isRecording">
                <span class="material-icons recorder__record-btn__content__icon">mic</span>
                Listening to you
            </div>
            <div class="recorder__record-btn__content" v-else>
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
            }
        }
    }
</script>
