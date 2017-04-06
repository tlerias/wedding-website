<template>
  <div class="quote-nav">
    <div v-bind:class="{ 'active': active === 'love-story' }" v-on:click="() => scroll('loveStory')">We love</div>
    <div v-bind:class="{ 'active': active === 'wedding-party' }" v-on:click="() => scroll('weddingParty')">the things we love</div>
    <div v-bind:class="{ 'active': active === 'wedding-info' }" v-on:click="() => scroll('weddingInfo')">for what they are.</div>
  </div>
</template>

<script>
export default {
  name: 'quote-nav',
  data() {
    return {
    };
  },
  props: ['active'],
  methods: {
    scroll(element) {
      window.scroll({ top: document.getElementById(element).getBoundingClientRect().top, left: 0, behavior: 'smooth' });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .quote-nav {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    text-align: left;
    font-weight: 900;
  }

  .inactive {
    cursor: pointer;
  }

  .active {
    color: pink;
  }
</style>
