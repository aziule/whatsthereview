<template>
    <div class="movie">
        <div class="movie__content-wrapper">
            <div
                class="movie__picture"
                :style="{
                    'background-image': 'url(' + movie.pictureUrl + ')'
                }">
            </div>
            <div class="movie__details">
                <div class="movie__name">{{ movie.name }}</div>
                <div
                        class="movie__score"
                        v-if="movie.score !== undefined">
                    {{ movie.score }}%
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['movie']
    }
</script>

<style>
</style>
