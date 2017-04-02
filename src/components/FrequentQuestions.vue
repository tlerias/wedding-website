<template>
  <md-card class="frequent-questions"  id="faq">
    <div class="md-toolbar-container">
      <md-toolbar>
        <h2 class="md-title" style="flex: 1">Frequently Asked Questions</h2>
        <md-button class="md-icon-button">
          <md-icon md-iconset="fa fa-question-circle" />
        </md-button>
      </md-toolbar>
    </div>
      <article>
      <md-list class="md-double-line">
        <md-list-item id="schedule">
          <md-subheader>What's the schedule for the weekend?</md-subheader>
          <div>More info to come!</div>
        </md-list-item>
        <md-list-item id="wedding-block">
          <md-subheader>How much is a room with the wedding block?</md-subheader>
          <div>More info to come!</div>
        </md-list-item>
        <md-list-item id="travel-tips">
          <md-subheader>How can I make a trip around Europe out of this?</md-subheader>
          <div>More info to come!</div>
        </md-list-item>

      </md-list>
    </article>
  </md-card>
</template>

<script>
export default {
  name: 'faq',
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .frequent-questions {
    text-align: center;
    padding: 1rem;
    font-weight: 900;
  }

  .md-theme-default.md-toolbar {
    background-color: #2c3e50;
  }
</style>
