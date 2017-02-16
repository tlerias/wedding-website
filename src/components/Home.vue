<template>
  <div class="home-container">
    <section class="home-hover-container" v-for="(item, index) in items" v-on:mouseenter="() => mouseEnter(index)" v-on:mouseleave="() => mouseLeave(index)">
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
    const items = [
      { quote: 'We love', subtext: 'our love story' },
      { quote: 'The things we love', subtext: 'briday party' },
      { quote: 'For what they are.', subtext: 'wedding & registry info' }
    ];
    const active = {};
    items.forEach((item, i) => (active[i] = false));
    return {
      active,
      items,
    };
  },
  methods: {
    mouseEnter(i) {
      this.$set(this.active, i, true);
    },
    mouseLeave(i) {
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
  }

  .home-maintext {
    min-width: 100px;
    cursor: pointer;
  }

  .home-subtext {
    font-size: 2rem;
    cursor: pointer;
  }
</style>
