<template>
    <section class="splash">
        <h1>Welcome</h1>
        <div v-if="!isSupported">
            <p>
                Unfortunately, it seems that your browser is not supporting this app.<br>
                If you are using Internet Explorer, <strong>it is the perfect moment to switch to Chrome. Forever. Seriously, never use IE.</strong>
            </p>
            <p>
                You can download Chrome <a href="https://www.google.com/chrome/browser/desktop/">here</a>.
            </p>
        </div>
        <div v-else>
            <p>
                <ul>
                    <li><span class="emphasized">1</span> Click on "Look for a movie"</li>
                    <li><span class="emphasized">2</span> Authorise the audio API</li>
                    <li><span class="emphasized">3</span> Speak a movie name (in english)</li>
                    <li><span class="emphasized">4</span> See the movie reviews and ranking</li>
                </ul>
            </p>
        </div>
    </section>
</template>

<script>
    export default {
      props: {
        isSupported: {
          type: Boolean,
          required: true
        }
      }
    }
</script>
