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
        <md-card-content>
          See the "<i class="fa fa-bed" />Where to stay section" or you can email me <a href="mailto:tlerias@gmail.com?subject=Wedding Questions!"> tlerias[at]gmail.com</a></md-card-content>
      </md-card-expand>

      <md-card-expand>
        <md-card-actions>
          <md-subheader id="travel-tips">How can I make a trip around Europe out of this?</md-subheader>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button" md-expand-trigger>
            <i class="fa fa-chevron-down" />
          </md-button>
        </md-card-actions>
        <md-card-content class="align-left">
          <ul>
            <li>Budget Airlines
              <ul>
                <li>A lot of <a href="https://www.ryanair.com/gb/en/" target="_blank"> Ryanair</a> flights fly out of Frankfurt–Hahn Airport (HHN). This is about an hour and a half drive from Luxembourg. It may be worth it if you're renting a car in Luxembourg because the flights out of here are very cheap</li>
                <li><a href="http://www.volotea.com/en/" target="_blank">Volotea</a> is another budget airline. You can find flights between Nice and Luxembourg for less that 50 Euros each way (some times as low as 5 euros).</li>
              </ul>
            </li>
            <li> Other Affordable Airlines and Destinations from Luxembourg
              <ul>
                <li>There is a big Portuguese presence in Luxembourg, so lucky for us, flights to Portugal are VERY affordable. <a href="https://www.flytap.com/en-lu/" target="_blank"> (See TAP Portugal)</a></li>
                <li>Cheapest destinations to fly from Luxembourg are Portugal, Amsterdam, London and Milan (and many more cities)</li>
                <li>Shoot me an email at <a href="mailto:tlerias@gmail.com?subject=Wedding Travel!"> tlerias[at]gmail.com</a> for specific travel recommendations, I'm happy to help!</li>
              </ul>
            </li>
            <li>There is a high speed train between Luxembourg and Paris (2 hours only)! I recommend booking your ticket 2-3 months in advance for the best price. <a href="http://www.sncf.com/en/trains/tgv" target="_blank">(Check TGV website)</a></li>
            <li>If you plan on visiting Brussels, there is a train but it takes twice as long as driving. So consider renting a car.</li>

            <li>My favorite sites for looking for flights and hotels:
              <ol>
                <li>
                  <a href="https://www.skyscanner.net/" target="_blank">Skyscanner</a>
                  <br />Tip: type "Everywhere" as your destinations to see cheapest places to flight for selected dates.
                </li>
                <li>
                  <a href="http://booking.com/" target="_blank">Booking.com</a>
                </li>
                <li>
                  <a href="https://www.kayak.com/" target="_blank">Kayak.com</a>
                      <br />Tip: <a href="https://www.kayak.com/explore/LUX" target="_blank">Kayak.com's explore section for cheapest places to fly</a>
                </li>
              </ol>
            </li>
            <li>More travel tips to come!</li>
          </ul>
        </md-card-content>
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
              <div>
                <div>For the men</div>
                <span class="subtitle">Jacket and tie.</span>
              </div>
            </md-list-item>
            <md-list-item>
              <div>
                <div>For the women</div>
                <span class="subtitle">A cocktail dress or dressy skirt and top.</span>
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
    return {};
  },
  methods: {
    scroll(element) {
      window.scroll({
        top: Math.abs(
          document.getElementById(element).getBoundingClientRect().top,
        ),
        left: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .frequent-questions {
    text-align: center;
    padding: 1rem;
    font-weight: 900;
  }

  .align-left {
    text-align: left;
  }

  .md-theme-default.md-toolbar {
    background-color: #2c3e50;
  }

  .subtitle{
    font-size: .9rem;
    color:#636363;
  }

  .warning {
    color: red;
  }
</style>
