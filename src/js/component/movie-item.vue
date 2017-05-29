<template>
    <div
        class="movie"
        v-bind:class="{
            'movie--matching':  movie.matchingScore === 100
        }">
        <div class="movie__content-wrapper">
            <div class="movie__picture"
                 :style="{
                        'background-image': 'url(' + movie.pictureUrl + ')'
                 }">
            </div>
            <div class="movie__details">
                <div class="movie__name">
                    {{ movie.name }}
                </div>
                <div class="movie__score"
                     v-if="movie.score !== undefined">
                    {{ movie.score }}%
                    <stars-rating v-bind:pct="movie.score"></stars-rating>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import StarsRating from './stars-rating.vue'

    export default {
        props: ['movie'],
        components: {
            StarsRating
        }
    }
</script>
