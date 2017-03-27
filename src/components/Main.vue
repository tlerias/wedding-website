<template>
  <div class="app-container">
    <div class="home-container">
      <header class="logo" data-aos="zoom-in" data-aos-anchor-placement="bottom-center">Jeremy <span class="amp">&</span> Tara</header>
        <section class="home-quote-container" v-for="(item, index) in items">
          <div v-on:click="() => scroll(items[index].name)">
            <div class="home-maintext">{{item.quote}}</div>
            <div class="home-subtext">{{item.subtext}}</div>
          </div>
        </section>
        <div class="bg-slide" data-aos="fade-right" data-aos-duration="10000"></div>
      <div v-on:click="() => scroll('weddingInfo')" class="direction-help">
        <i class="fa fa-arrow-circle-down" />
      </div>
    </div>
    <wedding-info></wedding-info>
    <love-story></love-story>
    <wedding-party></wedding-party>
  </div>
</template>

<script>
import LoveStory from './LoveStory';
import WeddingParty from './WeddingParty';
import WeddingInfo from './WeddingInfo';
export default {
  name: 'hello',
  data() {
    const items = [
      { quote: 'We love', subtext: 'our love story', name: 'loveStory' },
      { quote: 'The things we love', subtext: 'bridesmaids and groomsmen', name: 'weddingParty' },
      { quote: 'For what they are.', subtext: 'wedding & registry info', name: 'weddingInfo' }
    ];
    const active = {};
    items.forEach((item, i) => (active[i] = false));
    return {
      slide: false,
      active,
      items,
      isActive: false,
    };
  },
  methods: {
    mouseEnter(i) {
      this.slide = true;
      this.$set(this.active, i, true);
      this.isActive = true;
    },
    mouseLeave(i) {
      this.slide = false;
      this.$set(this.active, i, false);
      this.isActive = false;
    },
    scroll(element) {
      window.scroll({ top: document.getElementById(element).getBoundingClientRect().top, left: 0, behavior: 'smooth' });

    }
  },
  components: {
    'love-story': LoveStory,
    'wedding-party': WeddingParty,
    'wedding-info': WeddingInfo,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .logo {
    position: relative;
    font-size: 1rem;
    text-align: right;
    text-transform: uppercase;
    vertical-align: middle;
    color: #636363;
  }

  .amp {
    font-size: 2rem;
    color: #2c3e50;
    vertical-align: middle;
  }

  .home-container {
    font-size: 2rem;
    padding: 1rem;
    font-weight: 900;
    height: 100vmax;
  }

  .home-quote-container {
    padding: 10px;
    height: 75px;
  }

  .home-maintext {
    min-width: 100px;
    cursor: pointer;
  }

  .home-subtext {
    font-size: 1rem;
    cursor: pointer;
    color: pink;
    padding: .5rem 0;
  }

  .direction-help {
    display: block;
    margin: 0 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    text-align: center;
    position: absolute;
    top: 1rem;
    cursor: pointer;
    z-index: 3;
  }

  .bg-slide {
    background: url('../assets/SAM_1350.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    height: 100%;
    margin: auto;
    overflow: auto;
  }

  @media screen and (max-width: 480px) {
    .bg-slide {
      background-size: 400px;
    }

    .home-container {
      font-size: 1.2rem;
    }

    .direction-help {
      font-size: 2rem;
      top: 13rem;
      right: 1rem;
      transform:none;
      margin: 0;

    }
  }

</style>
