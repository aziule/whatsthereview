<template>
    <div class="movie">
        <div class="movie__name">{{ movie.name }}</div>
        <div class="movie__year">{{ movie.year }}</div>
        <div class="movie__score">{{ movie.score }}</div>
        <img class="movie__picture" :src="movie.pictureUrl" />
    </div>
</template>

<script>
    export default {
        props: ['movie']
    }
</script>

<style>
</style>
