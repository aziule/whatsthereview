<template>
    <section class="search" v-if="currentQuery !== null">
        <div class="search__label">Results&nbsp;for</div>
        <div class="search__query">{{ currentQuery }}</div>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            currentQuery: 'currentQuery'
        })
    }
</script>

<style>
</style>
