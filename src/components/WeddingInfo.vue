<template>
  <md-card class="wedding-info" id="weddingInfo">
    <div class="md-title">Wedding Details</div>
    <div class="tiles">
      <md-card class="tile main" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header>
          <div class="md-title">Location, Date & Time</div>
        </md-card-header>
        <i class="title-icon fab fa-fort-awesome" />
        <a href="http://www.chateau-arlon.be/en/" class="emphasize" target="_blank">Château du Bois d'Arlon</a>
        <div>Route de Virton 354, 6700 Arlon, Belgium</div>
        <section>
          <h3 class="sub-header">Time and date</h3>
          <i class="title-icon fa fa-clock" />
          <div>4th August 2018</div>
          <div>3 PM</div>
        </section>
      </md-card>

      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left" id="hotel-block-info">
        <md-card-header class="hotel-header">
          <div class="md-title">Where to stay</div>
          <i class="title-icon fa fa-bed" />
          <div class="md-subtitle">We have special block rates at the following hotels:</div>
        </md-card-header>
        <md-card-content class="hotel-block">
          <div class="currency-container">
            <i class="currency fa fa-euro-sign" />
            <i class="currency fa fa-euro-sign" />
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
              <span class="block-dates">3rd August 2018 - 5th August 2018</span>
              <md-list class="md-dense">
                <md-list-item>
                  <span>Superior Single Room</span>
                  <span class="md-list-action"><i class="fa fa-euro-sign" /> 95 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
                <md-list-item>
                  <span>Superior Double Room</span>
                  <span class="md-list-action"><i class="fa fa-euro-sign" /> 105 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
              </md-list>
              <br /><span class="addition fa fa-exclamation-circle"></span> Breakfast buffet is included with both of these rates.
              <br /><span class="warning fa fa-exclamation-circle"></span> Deadline to book is 22 June 2018.
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
            <md-card-content>Please fill out <a target="_blank" href="https://www.dropbox.com/s/5vdfke4jwdth35z/Novotel.PDF?dl=0">this form</a> and email it to <a href="mailto:h5556-am@accor.com">h5556-am@accor.com</a>. You may also fax to <a href="fax:+35226480224">+352 26 48 02 24</a> or phone them at <a href="tel:+352248781">+352 24 87 81</a>.
</md-card-content>
          </md-card-expand>
        </md-card-content>

        <!-- <md-card-content class="hotel-block">
          <div class="currency-container">
            <i class="currency fa fa-euro-sign" />
            <i class="currency fa fa-euro-sign" />
            <i class="currency fa fa-euro-sign" />
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
              <span class="block-dates">3rd August 2018 - 5th August 2018</span>
              <md-list class="md-dense">
                <md-list-item>
                  <span>Single Occupancy </span>
                  <span class="md-list-action"><i class="fa fa-euro-sign" /> 155 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
                <md-list-item>
                  <span>Double Occupancy</span>
                  <span class="md-list-action"><i class="fa fa-euro-sign" /> 180 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
              </md-list>
              <span class="addition fa fa-exclamation-circle"></span> Breakfast buffet is included with both of these rates.
              <br />
              <span class="addition fa fa-exclamation-circle"></span> Free airport shuttle is available also.
              <br />
              <span class="warning fa fa-exclamation-circle"></span> Deadline to book is 3 July 2018.
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
            <md-card-content>Please fill out <a href="https://www.dropbox.com/s/i8t68ccmevgm39s/LeRoyal.pdf?dl=0">this form</a> and email it to <a href="mailto:groupcoordinator@leroyalluxembourg.com">groupcoordinator@leroyalluxembourg.com</a>. You may also fax to <a href="fax:+352225948">+352 22 59 48</a> or phone them at <a href="tel:+352241616717">+352 241 61 67 17</a>.
</md-card-content>
          </md-card-expand>
          <a href="mailto:tlerias@gmail.com?subject=I'm having trouble booking a hotel block!&body=Hi, Tara. I am having issue booking a hotel block. I'd like to book... ">Ah! I'm having trouble booking a hotel block!</a>
        </md-card-content> -->

        <md-card-content class="hotel-block">
          <div class="currency-container">
            <i class="currency fa fa-euro-sign" />
            <i class="currency fa fa-euro-sign" />
            <i class="currency fa fa-euro-sign" />
          </div>
          <a class="emphasize"  href="http://www.sofitel.com/gb/hotel-5555-sofitel-luxembourg-le-grand-ducal/index.shtml" target="_blank">Sofitel Luxembourg Le Grand Ducal</a>
          <div>40 Boulevard d'Avranches, 1160 Luxembourg</div>
          <md-card-expand>
            <md-card-actions>
              Prices
              <span style="flex: 1"></span>
              <md-button class="md-icon-button" md-expand-trigger>
                <i class="fa fa-chevron-down" />
              </md-button>
            </md-card-actions>
            <md-card-content>
              <span class="block-dates">3rd August 2018 - 5th August 2018</span>
              <md-list class="md-dense">
                <md-list-item>
                  <span>Single Occupancy </span>
                  <span class="md-list-action"><i class="fa fa-euro-sign" /> 125 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
                <md-list-item>
                  <span>Double Occupancy</span>
                  <span class="md-list-action"><i class="fa fa-euro-sign" /> 140 per night.</span>
                </md-list-item>
                <md-divider></md-divider>
              </md-list>
              <span class="addition fa fa-exclamation-circle"></span> Breakfast buffet is included with both of these rates.
              <br />
              <span class="warning fa fa-exclamation-circle"></span> Deadline to book is 29 June 2018.
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
            <md-card-content>Please fill out <a target="_blank" href="https://www.dropbox.com/s/0imc0nnb5u8dtcd/Sofitel.pdf?dl=0">this form</a> and email it to <a href="mailto:h5555-re2@sofitel.com">h5555-re2@sofitel.com</a>. You may also fax to <a href="fax:+35226280223">+352 26 280 223</a> or phone them at <a href="tel:+35224877249">+352 24 87 72 49</a>.
</md-card-content>
          </md-card-expand>
          <a href="mailto:tlerias@gmail.com?subject=I'm having trouble booking a hotel block!&body=Hi, Tara. I am having issue booking a hotel block. I'd like to book... ">Ah! I'm having trouble booking a hotel block!</a>
        </md-card-content>

        <h4 v-on:click="() => scroll('wedding-block')">Wedding Block Prices</h4>
      </md-card>
      <md-card class="tile" data-aos-anchor-placement="top-center">
        <md-card-header>
          <div class="md-title">Rehearsal Dinner</div>
        </md-card-header>
        <i class="title-icon fa fa-utensils" />
        <md-card-content class="flex travel-info">
          <div class="center">
            All guests are invited to the Rehearsal Dinner.
            <br />It will be at 7 PM at
            <a class="emphasize center" href="https://www.visitluxembourg.com/en/place/castle/bock-casemates-luxembourg" target="_blank">Bock Casemates</a></div>
          The venue is located in the Bock Casemates which is a man made cave system.
          <ul>
            <li>Shuttles will be leaving Novotel and Sofitel hotels promptly at 6:45 PM.</li>
            <li>Shuttles will return to the hotel at 10 PM.</li>
            <li>The floor is uneven in places, as such we recommend flat/comfortable shoes.</li>
            <li>Guests are welcome to explore the Casemates during the event.</li>
          </ul>
        </md-card-content>
      </md-card>
      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left" id="getting-to">
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
                  <md-card-content>The venue is 20 minutes from the Luxembourg City Center, so we recommend flying into <a href="https://www.lux-airport.lu/">Luxembourg Findel Airport (LUX).</a></md-card-content>
                </md-card-expand>

                <md-card-expand class="travel-info">
                  <md-card-actions>
                    Fly to Paris then train to Luxembourg
                    <span style="flex: 1"></span>
                    <md-button class="md-icon-button" md-expand-trigger>
                      <i class="fa fa-chevron-down" />
                    </md-button>
                  </md-card-actions>
                  <md-card-content>It is also possible to fly into <a href="http://www.parisaeroport.fr/en/passengers/access/paris-charles-de-gaulle" target="_blank">Paris - Charles de Gaulle (CDG)</a> then take a high speed <a target="_blank" href="https://tgv.en.voyages-sncf.com/en/TGV-Luxembourg-Paris">TGV (2 hour) train</a> to Gare de Luxembourg (Luxembourg train station) from the Paris Est train station located in the city. There is also a TGV train that you can take from the Airport (Paris Roissy Charles De Gaulles) but this train stops in Brussels and is about a 6 hr trip. <span class="warning">I recommend booking any trains between Paris and Luxembourg 2-3 months in advance to get the best price. </span></md-card-content>
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
                If you are coming from another European city you can look for trains from your starting city to the Gare de Luxembourg (Luxembourg Train Station). Or, you can fly into <a href="https://www.lux-airport.lu/">Luxembourg Findel Airport (LUX)</a>
              </md-card-content>
            </md-card>
          </md-card-content>
      </md-card>
      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header>
          <div class="md-title">Getting around Luxembourg</div>
        </md-card-header>
        <i class="title-icon fa fa-bicycle" />
        <md-card-expand class="travel-info">
          <md-card-actions>
            Public Transportation
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>The public transportation system is very easy. Google Maps can tell you exactly how to get from Point A to Point B. You can pay 2 Euros for a single ride or 4 Euros for the whole day.</md-card-content>
        </md-card-expand>
        <md-card-expand class="travel-info">
          <md-card-actions>
            Walking
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>Luxembourg is also very small, it is quite easy to walk to places.</md-card-content>
        </md-card-expand>
        <md-card-expand class="travel-info">
          <md-card-actions>
            Taxi
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>Uber does not exist in Luxembourg, but there is a similar app call <a href="https://www.webtaxi.lu/en/welcome.html" target="_blank">WebTaxi</a>. However, it is expensive.</md-card-content>
        </md-card-expand>
        <md-card-expand class="travel-info">
          <md-card-actions>
            Bike
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>There are CityBike stations all over Luxembourg. You can rent a bike this way.</md-card-content>
        </md-card-expand>
      </md-card>

      <md-card class="tile" data-aos-anchor-placement="top-center" data-aos-once="true" data-aos="flip-left">
        <md-card-header>
          <div class="md-title">Things to do around Luxembourg</div>
        </md-card-header>
        <i class="title-icon fa fa-binoculars" />
        <md-card-expand class="travel-info">
          <md-card-actions>
            Vianden Castle
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="http://www.castle-vianden.lu/english/index.html" target="_blank">Website</a>
            Vianden Castle is a beautiful castle 45 minutes away from the city in North Luxembourg. Tours of the castle are available (and recommended!).

          </md-card-content>
        </md-card-expand>
        <md-card-expand class="travel-info">
          <md-card-actions>
            Wine Tasting in Remich
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="http://www.visitmoselle.lu/en/vins-terroir" target="_blank">Website</a>
            The Moselle river runs along the border of Germany and Luxembourg. This region in Luxembourg is well known for thier white wines. Many vinyards are available to visit and tour. We recommend trying Moselle Rieslings.
          </md-card-content>
        </md-card-expand>
        <md-card-expand class="travel-info">
          <md-card-actions>
            Hiking in Mullerthal
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="http://www.mullerthal.lu/en" target="_blank">Website</a>
            Mullerthal is known as "Little Switzerland". There are 112 km of hiking trails that shows you the beauty of Luxembourg nature.
          </md-card-content>
        </md-card-expand>
        <md-card-expand class="travel-info">
          <md-card-actions>
            Um Bock Casemates* Wedding Rehearsal Dinner will be hosted here
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="https://www.visitluxembourg.com/en/place/castle/bock-casemates-luxembourg" target="_blank">Website</a>
            Luxembourg once was a fortress with a 23 km network of casemates that housed thousands of soldiers and their horses, and also housed workshops, kitchens, bakeries, slaughter-houses, etc.
            You can visit these casemates today and our Rehearsal Dinner will be hosted here!

          </md-card-content>
        </md-card-expand>

        <md-card-expand class="travel-info">
          <md-card-actions>
          MUDAM Museum
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="https://www.mudam.lu/en/le-musee/" target="_blank">Website</a>
            MUDAM museum is the museum of modern art in Luxembourg.

          </md-card-content>
        </md-card-expand>

        <md-card-expand class="travel-info">
          <md-card-actions>
            Luxembourg City History Museum
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="http://citymuseum.lu/en/" target="_blank">Website</a>
            Learn about the history of Luxembourg

          </md-card-content>
        </md-card-expand>

        <md-card-expand class="travel-info">
          <md-card-actions>
            Battle of the Bulge location (Bastogne, Belgium)
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="https://www.tripadvisor.com/Attractions-g188659-Activities-Bastogne_Luxembourg_Province_The_Ardennes_Wallonia.html" target="_blank">Website</a>
            About an hour drive away from the city is Bastogne. Here was the location of the Battle of the Bulge. Bastogne makes a great day trip.

          </md-card-content>
        </md-card-expand>

        <md-card-expand class="travel-info">
          <md-card-actions>
            Luxembourg American Cemetery and Memorial
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="https://www.abmc.gov/cemeteries-memorials/europe/luxembourg-american-cemetery#.WsVAI9NuYWo" target="_blank">Website</a>
            Luxembourg has a beautiful cemetery in memorial for our American soldiers lost in service. Here you will find the memorial for the famous General Patton.

          </md-card-content>
        </md-card-expand>

        <md-card-expand class="travel-info">
          <md-card-actions>
            Notre Dame
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="https://www.visitluxembourg.com/en/place/misc/cathedrale-notre-dame" target="_blank">Website</a>
            A beautiful cathedral in city center.
          </md-card-content>
        </md-card-expand>

        <md-card-expand class="travel-info">
          <md-card-actions>
            Grand Ducal Palace
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="https://www.visitluxembourg.com/en/place/castle/palace-of-the-grand-dukes" target="_blank">Website</a>
            See where the Grand Duke of Luxembourg lives. Guided tours available.

          </md-card-content>
        </md-card-expand>

        <md-card-expand class="travel-info">
          <md-card-actions>
            The Grund
            <span style="flex: 1"></span>
            <md-button class="md-icon-button" md-expand-trigger>
              <i class="fa fa-chevron-down" />
            </md-button>
          </md-card-actions>
          <md-card-content>
            <a class="todo-website" href="https://www.tripadvisor.com/Attraction_Review-g190356-d5003559-Reviews-Grund-Luxembourg_City.html" target="_blank">Website</a>
            Beautiful view of the city. Follow the walkways near the canal to see the best views in the city.
          </md-card-content>
        </md-card-expand>
      </md-card>

      <md-card class="tile" data-aos-anchor-placement="top-center">
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
    return {};
  },
  methods: {
    scroll(element) {
      window.scroll({
        top: document.getElementById(element).getBoundingClientRect().top,
        left: 0,
        behavior: 'smooth',
      });
    },
  },
  components: {
    'quote-nav': QuoteNav,
    'frequent-questions': FrequentQuestions,
  },
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
   align-items: space-between;
   -webkit-justify-content: center;
   justify-content: space-between;
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
    display: inline-block;
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
    height: 1em;
    font-size: 2rem;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
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

  .center {
    text-align: center;
    display: block;
    width: 100%;
  }

  .warning {
    color: red;
  }

  .todo-website {
    display: block;
  }

  .md-card-expand:not(.md-active) .md-card-content {
    display: none;
  }
</style>
