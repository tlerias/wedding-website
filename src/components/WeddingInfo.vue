<template>
  <div class="wedding-info" id="weddingInfo">
    <h2>Wedding Details</h2>
    <section>
      <h3 class="sub-header">Location</h3>
      <i class="fa fa-fort-awesome" />
      <a href="http://www.chateau-arlon.be/en/" target="_blank">Château du Bois d'Arlon</a>
      <div>Route de Virton 354, 6700 Arlon, Belgium</div>
    </section>
    <section>
      <h3 class="sub-header">Where to stay</h3>
      <i class="fa fa-bed" />
      <a href="http://www.accorhotels.com/gb/hotel-5556-novotel-luxembourg-centre/index.shtml" target="_blank">Hotel Novotel Luxembourg Centre</a>
      <div>35 Rue du Laboratoire, 1911 Luxembourg</div>
      <h4>Wedding Block Prices</h4>
    </section>
    <frequent-questions></frequent-questions>
  </div>
</template>

<script>
import QuoteNav from './QuoteNav';
import FrequentQuestions from './FrequentQuestions';
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
    'frequent-questions': FrequentQuestions,
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

  .sub-header {
    text-decoration: underline;
  }

  .fa {
    display: block;
    font-size: 2rem;
  }
</style>
