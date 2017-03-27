<template>
  <md-card class="wedding-info" id="weddingInfo">
    <div class="md-title">Wedding Details</div>
    <div class="tiles">
      <md-card class="tile main" data-aos="flip-left" data-aos-delay="100">
        <md-card-header>
          <div class="md-title">Location, Date & Time</div>
        </md-card-header>
        <i class="fa fa-fort-awesome" />
        <a href="http://www.chateau-arlon.be/en/" target="_blank">Château du Bois d'Arlon</a>
        <div>Route de Virton 354, 6700 Arlon, Belgium</div>
        <section>
          <h3 class="sub-header">Time and date</h3>
          <i class="fa fa-clock-o" />
          <div>4th August 2018</div>
          <h4 v-on:click="() => scroll('schedule')">Schedule</h4>
        </section>
      </md-card>

      <md-card class="tile" data-aos="flip-left" data-aos-delay="200">
        <md-card-header>
          <div class="md-title">Where to stay</div>
        </md-card-header>
        <i class="fa fa-bed" />
        <a href="http://www.accorhotels.com/gb/hotel-5556-novotel-luxembourg-centre/index.shtml" target="_blank">Hotel Novotel Luxembourg Centre</a>
        <div>35 Rue du Laboratoire, 1911 Luxembourg</div>
        <h4 v-on:click="() => scroll('wedding-block')">Wedding Block Prices</h4>
      </md-card>
      <md-card class="tile" data-aos="flip-left" data-aos-delay="400">
        <md-card-header>
          <div class="md-title">Getting to Luxembourg</div>
        </md-card-header>
        <i class="fa fa-plane" />
        <div>The venue is 20 minutes from the Luxembourg City Center, so we recommend flying into <a href="https://www.lux-airport.lu/">Luxembourg International Airport (LUX)</a></div>
        <div>If you are coming from another European city you can look for trains from your starting city to the Gare de Luxembourg (Luxembourg Train Station)</div>
        <h4 v-on:click="() => scroll('travel-tips')">Travel tips</h4>
      </md-card>
      <md-card class="tile" data-aos="flip-left" data-aos-delay="500">
        <md-card-header>
          <div class="md-title">Getting around Luxembourg</div>
        </md-card-header>
        <i class="fa fa-bicycle" />
        More info to come!
      </md-card>
      <md-card class="tile" data-aos="flip-left" data-aos-delay="500">
        <md-card-header>
          <div class="md-title">Registry</div>
        </md-card-header>
        <i class="fa fa-gift" />
        More info to come!
      </md-card>
    </div>
    <frequent-questions></frequent-questions>
  </md-card>
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
    scroll(element) {
      window.scroll({ top: document.getElementById(element).getBoundingClientRect().top, left: 0, behavior: 'smooth' });
    }
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

  .md-card {
    overflow: visible;
  }

  .sub-header {
  }

  h4{
    display: none;
  }

  .fa {
    display: block;
    font-size: 2rem;
  }

  .tile {
    width: 250px;
    margin: 10px;
    padding: 15px;
  }

  .tiles {
    display: flex;
    -webkit-flex-wrap: wrap;
   flex-wrap: wrap;
   align-items: flex-start;;
   justify-content: space-around;
  }

  .main {
    flex-basis: 100%;
  }
</style>
