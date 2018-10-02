<template>
    <div
        class="show"
        :class="{
            'show--matching':  show.matchingScore === 100
        }">
        <div class="show__content-wrapper">
            <div class="show__picture"
                 :style="{
                        'background-image': 'url(' + show.pictureUrl + ')'
                 }">
            </div>
            <div class="show__details">
                <div class="show__name">
                    {{ show.name }}
                </div>
                <div class="show__score"
                     v-if="show.score !== null">
                    {{ show.score }}%
                    <stars-rating v-bind:pct="show.score"></stars-rating>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import StarsRating from './stars-rating.vue'

    export default {
        props: {
            show: {
                type: Object,
                required: true
            }
        },
        components: {
            StarsRating
        }
    }
</script>
