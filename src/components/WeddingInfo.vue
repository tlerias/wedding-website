<template>
  <div class="wedding-info" id="weddingInfo">
    <quote-nav active="wedding-info"></quote-nav>
    <h2>Wedding</h2>
  </div>
</template>

<script>
import QuoteNav from './QuoteNav';
export default {
  name: 'wedding-info',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    'quote-nav': QuoteNav,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wedding-info {
    position: relative;
    text-align: center;
    padding: 1rem;
    font-weight: 900;
    min-height: 1000px;
  }
</style>
