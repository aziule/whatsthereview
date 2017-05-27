<template>
    <section class="splash content" v-if="isDisplayed">
        <h1>Welcome!</h1>
        <p v-if="!isSupported">Text if speech recognition is not supported</p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non lectus non metus malesuada facilisis.
            Nunc aliquam metus a erat lacinia, ut laoreet mauris lobortis. Suspendisse tristique ac nulla sit amet vestibulum.
        </p>
        <p>
            Morbi vulputate leo ex, quis eleifend purus maximus sit amet. Cras at lacus ac nunc posuere sagittis. Etiam malesuada tortor sed elit mattis cursus. In sit amet tempus lectus. Quisque luctus, dolor at lacinia commodo, massa mi condimentum felis, eu iaculis arcu libero eu lacus. Curabitur pellentesque urna quis est mattis lacinia. Aliquam dapibus laoreet nisi, at feugiat nisl varius in. Praesent egestas nibh ut mollis fringilla. Integer at orci ut nisl porttitor sodales. Morbi quis risus nunc. Curabitur ultricies luctus quam ut vestibulum.
        </p>
        <p>
            Suspendisse suscipit blandit arcu dapibus vulputate. Nullam tempus bibendum orci, vitae tristique ex pellentesque quis.
        </p>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: mapGetters({
            isDisplayed: 'isSplashDisplayed',
            isSupported: 'isRecorderSupported'
        })
    }
</script>

<style>
</style>
