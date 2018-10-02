<template>
    <section class="search">
        <div class="search__label">Results&nbsp;for</div>
        <div class="search__query">{{ query }}</div>
    </section>
</template>

<script>
    export default {
        props: {
            query: {
                type: String,
                required: true
            }
        }
    }
</script>
