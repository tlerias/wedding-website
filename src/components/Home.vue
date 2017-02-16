<template>
  <div class="home-container">
    <section class="home-hover-container" v-for="(item, index) in items" v-on:mouseenter="() => mouseEnter(index)" v-on:mouseleave="() => mouseLeave(index)">
      <div class="home-maintext" v-bind:class="{ shrink: active[index] }">{{item.quote}}</div>
      <transition name="appear">
        <div v-if="active[index]" class="home-subtext">{{item.subtext}}</div>
    </section>
    <transition name="slide">
      <div v-if="slide" class="bg-slide"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    const items = [
      { quote: 'We love', subtext: 'our love story' },
      { quote: 'The things we love', subtext: 'bridal party' },
      { quote: 'For what they are.', subtext: 'wedding & registry info' }
    ];
    const active = {};
    items.forEach((item, i) => (active[i] = false));
    return {
      slide: false,
      active,
      items,
    };
  },
  methods: {
    mouseEnter(i) {
      this.slide = true;
      this.$set(this.active, i, true);
    },
    mouseLeave(i) {
      this.slide = false;
      this.$set(this.active, i, false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-container {
    font-size: 5rem;
    padding: 1rem;
    font-weight: 900;
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
    -webkit-transition-delay: .2s; /* Safari */
  }

  .bg-slide {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background-color: black;
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
