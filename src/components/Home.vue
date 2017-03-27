<template>
  <div class="app-container">
    <div class="home-container">
      <section class="home-hover-container" v-for="(item, index) in items" v-on:mouseenter="() => mouseEnter(index)" v-on:mouseleave="() => mouseLeave(index)">
        <div class="home-maintext" v-bind:class="{ shrink: isActive }">{{item.quote}}</div>
        <transition name="appear">
          <div v-if="active[index]" v-bind:class="{ 'home-subtext': active[index] }" v-on:click="() => scroll(items[index].name)">{{item.subtext}}</div>
        </transition>
      </section>
      <transition name="slide">
        <div v-if="slide" class="bg-slide" v-bind:class="{ 'bg-slide-our-story': active[0] }"></div>
      </transition>
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
  .home-container {
    font-size: 5rem;
    padding: 1rem;
    font-weight: 900;
    height: 100vmax;
  }

  .home-hover-container {
    height: 100px;
    overflow: hidden;
  }

  .home-maintext {
    min-width: 100px;
    cursor: pointer;
  }

  .home-subtext {
    font-size: 2rem;
    cursor: pointer;
    color: white;
  }

  .home-subtext-active {
    color: white;
  }

  .appear-enter-active, .appear-leave-active {
    transition: opacity .5s
  }

  .appear-enter, .appear-leave-to /* .appear-leave-active in <2.1.8 */ {
    opacity: 0
  }

  .direction-help {
    display: block;
    margin: 0 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    text-align: center;
    position: absolute;
    bottom: 5rem;
    cursor: pointer;
  }

  .shrink {
    transition-delay: 1s;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    font-size: 1rem;
    -webkit-transition-delay: .4s; /* Safari */
  }

  .bg-slide {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    overflow: auto;
    background-color: black;
    z-index: -1;
  }

  .bg-slide-our-story {
    background: url('../assets/SAM_1350.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .slide-enter-active {
    transition: all .5s ease;
  }
  .slide-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-leave-to
  /* .slide-leave-active for <2.1.8 */ {
    transform: translateX(100%);
  }
</style>
