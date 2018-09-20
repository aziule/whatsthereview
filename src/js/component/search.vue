<template>
    <section class="search">
        <div class="search__label">Results&nbsp;for</div>
        <div class="search__query">{{ currentQuery }}</div>
    </section>
</template>

<script>
    export default {
        props: {
          currentQuery: {
            type: String,
            required: true
          }
        }
    }
</script>
