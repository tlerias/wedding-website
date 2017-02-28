<template>
  <div class="app-container">
    <div class="home-container">
      <section class="home-hover-container" v-for="(item, index) in items" v-on:mouseenter="() => mouseEnter(index)" v-on:mouseleave="() => mouseLeave(index)">
        <div class="home-maintext" v-bind:class="{ shrink: isActive }">{{item.quote}}</div>
        <transition name="appear">
          <div v-if="active[index]" v-bind:class="{ 'home-subtext': active[index] }" v-on:click="() => onClick(items[index].name)">{{item.subtext}}</div>
        </transition>
      </section>
      <transition name="slide">
        <div v-if="slide" class="bg-slide" v-bind:class="{ 'bg-slide-our-story': active[0] }"></div>
      </transition>
    </div>
    <love-story></love-story>
  </div>
</template>

<script>
import LoveStory from './LoveStory';
export default {
  name: 'hello',
  data() {
    const items = [
      { quote: 'We love', subtext: 'our love story', name: 'loveStory' },
      { quote: 'The things we love', subtext: 'bridal party' },
      { quote: 'For what they are.', subtext: 'wedding & registry info' }
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
    onClick(element) {
      window.scroll({ top: document.getElementById(element).getBoundingClientRect().top, left: 0, behavior: 'smooth' });

    }
  },
  components: {
    'love-story': LoveStory,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-container {
    font-size: 5rem;
    padding: 1rem;
    font-weight: 900;
    min-height: 1000px;
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
