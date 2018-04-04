<template>
  <md-card class="wedding-party" id="weddingParty">
    <h2>Wedding Party</h2>
    <md-card-content class="flex">
      <div class="col">
        <h3>Matron of Honor</h3> {{matronofhonor}}
        <h3>Bridesmaids</h3>
        <div> We will be revealing our Bridesmaids soon.</div>
        <!-- <div v-for="bridesmaid in bridesmaids">{{bridesmaid}}</div> -->
      </div>
      <div class="col">
        <h3>Best Man</h3> {{bestman}}
        <h3>Groomsmen</h3>
        <div> We will be revealing our Groomsmen soon.</div>
        <!-- <div v-for="groomsman in groomsmen">{{groomsman}}</div> -->
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'wedding-party',
  data() {
    return {
      bestman: 'Daniel Bird',
      matronofhonor: 'Rachel Ruggieri',
      bridesmaids: [
        'Katie Persichilli',
        'Kinsey Durham',
        'Diana Garces',
        'Liza Narvas',
        'Alina Lerias',
        'Lesley Lerias',
        'Courtney Lerias',
        'Nikki Oliveri',
      ],
      groomsmen: [
        'Tyler Ruggieri',
        'Pat Groome',
        'Dave Tell',
        'Nick Lerias',
        'Brandon Lerias',
        'Jeremy Markferding',
        'Charlie Kirkland',
        'Josh Harakal',
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wedding-party {
    text-align: center;
    padding: 1rem;
    font-weight: 300;
    min-height: 50vmax;
  }

  .col {
    margin: 0 30px;
  }

  .flex {
    display: flex;
    justify-content: center;
  }
</style>
