<template>
  <md-card class="wedding-info" id="weddingInfo">
    <div class="md-title">Wedding Details</div>
    <div class="tiles">
      <md-card class="tile main" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header>
          <div class="md-title">Location, Date & Time</div>
        </md-card-header>
        <i class="title-icon fa fa-fort-awesome" />
        <a href="http://www.chateau-arlon.be/en/" class="emphasize" target="_blank">Château du Bois d'Arlon</a>
        <div>Route de Virton 354, 6700 Arlon, Belgium</div>
        <section>
          <h3 class="sub-header">Time and date</h3>
          <i class="title-icon fa fa-clock-o" />
          <div>4th August 2018</div>
          <h4 v-on:click="() => scroll('schedule')">Schedule</h4>
        </section>
      </md-card>

      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header class="hotel-header">
          <div class="md-title">Where to stay</div>
          <i class="title-icon fa fa-bed" />
          <div class="md-subtitle">We have special block rates at the following hotels:</div>
        </md-card-header>
        <md-card-content class="hotel-block">
          <div class="currency-container">
            <i class="currency fa fa-eur" />
            <i class="currency fa fa-eur" />
          </div>
          <a class="emphasize" href="http://www.accorhotels.com/gb/hotel-5556-novotel-luxembourg-centre/index.shtml" target="_blank">Hotel Novotel Luxembourg Centre</a>
          <div>35 Rue du Laboratoire, 1911 Luxembourg</div>
          <md-card-expand>
            <md-card-actions>
              Prices
              <span style="flex: 1"></span>
              <md-button class="md-icon-button" md-expand-trigger>
                <i class="fa fa-chevron-down" />
              </md-button>
            </md-card-actions>
            <md-card-content>
              <span class="block-dates">3rd August - 5th August</span>
              <md-list class="md-dense">
                <md-list-item>
                  <span>Superior Single Room</span>
                  <span class="md-list-action"><i class="fa fa-eur" /> 95 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
                <md-list-item>
                  <span>Superior Double Room</span>
                  <span class="md-list-action"><i class="fa fa-eur" /> 105 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
              </md-list>
              <span class="addition fa fa-exclamation-circle"></span> Breakfast is included with both of these rates.
            </md-card-content>
          </md-card-expand>
          <md-card-expand>
            <md-card-actions>
              How to book
              <span style="flex: 1"></span>
              <md-button class="md-icon-button" md-expand-trigger>
                <i class="fa fa-chevron-down" />
              </md-button>
            </md-card-actions>
            <md-card-content>More information to come.</md-card-content>
          </md-card-expand>
        </md-card-content>

        <md-card-content class="hotel-block">
          <div class="currency-container">
            <i class="currency fa fa-eur" />
            <i class="currency fa fa-eur" />
            <i class="currency fa fa-eur" />
          </div>
          <a class="emphasize"  href="http://www.leroyalluxembourg.com/" target="_blank">Hôtel Le Royal</a>
          <div>12 Boulevard Royal, 2449 Luxembourg</div>
          <md-card-expand>
            <md-card-actions>
              Prices
              <span style="flex: 1"></span>
              <md-button class="md-icon-button" md-expand-trigger>
                <i class="fa fa-chevron-down" />
              </md-button>
            </md-card-actions>
            <md-card-content>
              <span class="block-dates">3rd August - 5th August</span>
              <md-list class="md-dense">
                <md-list-item>
                  <span>Single Occupancy </span>
                  <span class="md-list-action"><i class="fa fa-eur" /> 155 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
                <md-list-item>
                  <span>Double Occupancy</span>
                  <span class="md-list-action"><i class="fa fa-eur" /> 180 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
              </md-list>
              <span class="addition fa fa-exclamation-circle"></span> Breakfast is included with both of these rates.
              <br />
              <span class="addition fa fa-exclamation-circle"></span> Free airport shuttle is available also.
            </md-card-content>
          </md-card-expand>
          <md-card-expand>
            <md-card-actions>
              How to book
              <span style="flex: 1"></span>
              <md-button class="md-icon-button" md-expand-trigger>
                <i class="fa fa-chevron-down" />
              </md-button>
            </md-card-actions>
            <md-card-content>There is a form to be completed. Email Tara tlerias@gmail.com to recieve this form. </md-card-content>
          </md-card-expand>
        </md-card-content>

        <h4 v-on:click="() => scroll('wedding-block')">Wedding Block Prices</h4>
      </md-card>
      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header>
          <div class="md-title">Getting to Luxembourg</div>
        </md-card-header>
          <md-card-content>
            <md-card>
              <md-card-content>
                <i class="title-icon fa fa-plane" />
                <md-card-expand class="travel-info">
                  <md-card-actions>
                    Fly into Luxembourg *recommended
                    <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger>
                      <i class="fa fa-chevron-down" />
                    </md-button>
                  </md-card-actions>
                  <md-card-content>The venue is 20 minutes from the Luxembourg City Center, so we recommend flying into <a href="https://www.lux-airport.lu/">Luxembourg International Airport (LUX).</a></md-card-content>
                </md-card-expand>

                <md-card-expand class="travel-info">
                  <md-card-actions>
                    Fly to Paris then train to Luxembourg
                    <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger>
                      <i class="fa fa-chevron-down" />
                    </md-button>
                  </md-card-actions>
                  <md-card-content>It is also possible to fly into <a href="http://www.parisaeroport.fr/en/passengers/access/paris-charles-de-gaulle" target="_blank">Paris - Charles de Gaulle (CDG)</a> then take a high speed <a target="_blank" href="https://tgv.en.voyages-sncf.com/en/TGV-Luxembourg-Paris">TGV (2 hour) train</a> to Gare de Luxembourg (Luxembourg train station) from the Paris Est train station.</md-card-content>
                </md-card-expand>

                <md-card-expand class="travel-info">
                  <md-card-actions>
                    Fly to Brussels then drive or train to Luxembourg
                    <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger>
                      <i class="fa fa-chevron-down" />
                    </md-button>
                  </md-card-actions>
                  <md-card-content>You can fly into <a href="http://www.brusselsairport.be/en" target="_blank">Brussels Airport (BRU)</a> then drive 2.5 hours to Luxembourg (if your are renting a car), or take a local train (3.5 hours) to Gare de Luxembourg (Luxembourg train station).</md-card-content>
                </md-card-expand>

                <md-card-expand class="travel-info">
                  <md-card-actions>
                    Fly to Frankfurt then drive to Luxembourg
                    <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger>
                      <i class="fa fa-chevron-down" />
                    </md-button>
                  </md-card-actions>
                  <md-card-content>You can also rent a car and fly into <a href="https://www.frankfurt-airport.com/en/flights---more/flights.html" target="_blank">Frankfurt Airport (FRA)</a> then drive 2.5 hours to Luxembourg.</md-card-content>
                </md-card-expand>
              </md-card-content>
            </md-card>
            <md-card>
              <md-card-content>
                <i class="title-icon fa fa-train" />
                If you are coming from another European city you can look for trains from your starting city to the Gare de Luxembourg (Luxembourg Train Station). Or, you can fly into <a href="https://www.lux-airport.lu/">Luxembourg International Airport (LUX)</a>
              </md-card-content>
            </md-card>
          </md-card-content>
      </md-card>
      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header>
          <div class="md-title">Getting around Luxembourg</div>
        </md-card-header>
        <i class="title-icon fa fa-bicycle" />
        More info to come!
      </md-card>
      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header>
          <div class="md-title">Registry</div>
        </md-card-header>
        <i class="title-icon fa fa-gift" />
        <md-card-content class="flex">
          <a class="registry-item" target="_blank" href="https://www.myregistry.com/wedding-registry/Tara-Lerias-Jeremy-Bird-Dix-Hills-Ny/1155521?publicUrlName=birdslove">
            <img src="../assets/myregistry.png" width="100"/>
          </a>
          <a class="registry-item" target="_blank" href="https://www.united.com/CMS/en-US/products/travelproducts/Pages/CashGiftRegistry.aspx">
            <img src="../assets/united.png" width="100"/>
          </a>
          <a class="registry-item" target="_blank" href="https://www.honeyfund.com/wedding/birdslove">
            <img src="../assets/honeyfund.png" width="100"/>
          </a>
          <a class="registry-item" target="_blank" href="https://www.amazon.com/wedding/tara-lerias-jeremy-bird-paris-august-2018/registry/2SXS2GHJ7H7L9">
            <img src="../assets/amazon.jpg" width="100"/>
          </a>
          <a class="registry-item" target="_blank" href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=543690110&eventType=Wedding&pwsurl=">
            <img src="../assets/bedbath.png" width="100"/>
          </a>
        </md-card-content>
      </md-card>
    </div>
    <frequent-questions></frequent-questions>
  </md-card>
</template>

<script>
import QuoteNav from './QuoteNav';
import FrequentQuestions from './FrequentQuestions';

export default {
  name: 'wedding-info',
  data() {
    return {
    };
  },
  methods: {
    scroll(element) {
      window.scroll({ top: document.getElementById(element).getBoundingClientRect().top, left: 0, behavior: 'smooth' });
    }
  },
  components: {
    'quote-nav': QuoteNav,
    'frequent-questions': FrequentQuestions,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wedding-info {
    position: relative;
    text-align: center;
    padding: 1rem;
    min-height: 1000px;
  }

  .registry-item {
    min-height: 50px;
  }

  .flex {
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-items: center;
   align-items: center;
   -webkit-justify-content: center;
   justify-content: center;
  }

  .md-card {
    overflow: visible;
  }

  .sub-header {
  }

  .hotel-header {
    margin-bottom: 5px;
  }

  h4{
    display: none;
  }

  .travel-info {
    text-align: left;
  }

  .emphasize {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .addition {
    color: green;
  }

  .hotel-block {
    margin: 5px 0;
  }

  .title-icon {
    display: block;
    font-size: 2rem;
    margin-bottom: 5px;
  }

  .block-dates {
    font-weight: 400;
    color: #636363;
  }

  .currency-container {
    display: block;
    font-size: 1.25rem;
  }

  .md-list-item {
    margin: 5px 0;
  }

  .tile {
    width: 400px;
    margin: 10px;
    padding: 15px;
  }

  .tiles {
    display: flex;
    -webkit-flex-wrap: wrap;
   flex-wrap: wrap;
   align-items: flex-start;;
   justify-content: space-around;
  }

  .main {
    flex-basis: 100%;
  }
</style>
