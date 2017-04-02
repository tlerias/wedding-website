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
    <md-card-content>
      <md-card-expand>
        <md-card-actions>
          <md-subheader id="schedule">What's the schedule for the weekend?</md-subheader>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button" md-expand-trigger>
            <i class="fa fa-chevron-down" />
          </md-button>
        </md-card-actions>
        <md-card-content>More info to come!</md-card-content>
      </md-card-expand>

      <md-card-expand>
        <md-card-actions>
          <md-subheader id="wedding-block">How much is a room with the wedding block?</md-subheader>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button" md-expand-trigger>
            <i class="fa fa-chevron-down" />
          </md-button>
        </md-card-actions>
        <md-card-content>More info to come!</md-card-content>
      </md-card-expand>

      <md-card-expand>
        <md-card-actions>
          <md-subheader id="travel-tips">How can I make a trip around Europe out of this?</md-subheader>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button" md-expand-trigger>
            <i class="fa fa-chevron-down" />
          </md-button>
        </md-card-actions>
        <md-card-content>More info to come!</md-card-content>
      </md-card-expand>

      <md-card-expand>
        <md-card-actions>
          <md-subheader id="attire">What is the wedding attire?</md-subheader>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button" md-expand-trigger>
            <i class="fa fa-chevron-down" />
          </md-button>
        </md-card-actions>
        <md-card-content>
          <md-list class="md-double-line">
            <md-list-item>
              <div class="md-list-text-container">
                <span>For the men</span>
                <span class="md-list-action">Jacket and tie.</span>
              </div>
            </md-list-item>
            <md-list-item>
              <div class="md-list-text-container">
                <span>For the women</span>
                <span class="md-list-action">A cocktail dress or dressy skirt and top.</span>
              </div>
            </md-list-item>
          </md-list>
        </md-card-content>
      </md-card-expand>

    </md-card-content>
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
