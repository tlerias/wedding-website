<template>
  <div class="home-container">
    <section v-for="(item, index) in items" v-on:mouseover="() => mouseOver(index)">
      <transition name="shrink">
        <div class="home-maintext">{{item.quote}}</div>
      </transition>
      <div v-if="active[index]" name="appear" transition="fade">
        <div class="home-subtext">{{item.subtext}}</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      active: {},
      items: [
        { quote: 'We love', subtext: 'our love story' },
        { quote: 'The things we love', subtext: 'briday party' },
        { quote: 'For what they are.', subtext: 'wedding & registry info' }
      ],
    };
  },
  methods: {
    mouseOver: (i) => {
      this.active[i] = (this.active[i] ? !this.active[i] : true);
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

  .home-subtext {
    font-size: 2rem;
  }
</style>
