<template>
    <div class="stars-rating">
        <span v-for="f in ratingInfo.full" class="stars-rating__star material-icons">star</span>
        <span v-for="f in ratingInfo.half" class="stars-rating__star material-icons">star_half</span>
        <span v-for="f in ratingInfo.empty" class="stars-rating__star material-icons">star_border</span>
    </div>
</template>

<script>
    const NB_STARS = 5;

    export default {
        computed: {
            ratingInfo() {
                var starsRating = (Math.round(((this.pct * NB_STARS) / 100) * 2) / 2).toFixed(1);
                var ratingInfo = {
                    full: Math.floor(starsRating)
                }
                ratingInfo.half = Math.ceil(starsRating - ratingInfo.full)
                ratingInfo.empty = NB_STARS - ratingInfo.full - ratingInfo.half;

                return ratingInfo;
            }
        },
        props: ['pct']
    }
</script>