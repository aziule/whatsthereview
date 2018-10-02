<template>
    <nav class="top-nav">
        <h1 class="top-nav__app-name">What's the review</h1>
        <LangSelector />
    </nav>
</template>

<script>
    import LangSelector from './lang-selector.vue'

    export default {
        components: {
            LangSelector
        }
    }
</script>