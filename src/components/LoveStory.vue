<template>
  <md-card class="love-story" id="loveStory">
    <md-card-content class="story">
      <h2>Our Love Story</h2>
      Hoboken, New Jersey to Luxembourg City, Luxembourg <i class="fa fa-heart" />
      <div class="content">
        <div>
          <h3>How we met</h3>
          <p>
            Our love story is a stereotypical romantic movie plot where the Maid of Honor meets Bestman. I was the MOH for my cousin Rachel (who is now my Matron of Honor). Jeremy was the Bestman to Rachel's
            now-husband, Tyler. Tyler now is one of Jeremy's groomsmen. Rachel and Tyler's wedding was a beautiful ceremony and reception; love was in the air, and the rest was history.
            </main>
          </p>
      </div>
      <div>
        <h3>Our first "child"</h3>
        <p>
          Our French Bulldog, Winston (named after one of the quarterbacks out of Jeremy's Alma Mater, Florida State), was a surprise christmas gift from Jeremy to me. I was so
        surprised, I told Jeremy to give the little puppy back to his owner because there was no way that he was ours. When it finally set it that this little 10 lb frenchie was mine, I cried
        of pure happiness. Winston ran up to me and laid on my chest; he knew immediately knew I was his mother.
        </p>
      </div>
      <div>
        <h3>The engagement</h3>
        <p>This day was truly special and the best day of my life. We went up to "our spot" in the Fingerlakes of New York. We stayed at our favorite hotel and the morning after we arrived
          we did our favorite hike near Ithaca, NY. At the top of the hike, where you can get the most amazing view of Lucifer falls, we stopped for a picnic. He had brought our favorite wine from the
          area which we were saving for a special occasion. He broke open the wine, and then got down on one knee and asked me to be his wife! When we got back to the hotel, there were rose petals
          and chocolate covered wine. It was a magical day.
        </p>
      </div>
      <div>
        <h3>Getting married</h3>
        <p>In August 2016, Jeremy and I had a very small ceremony at Manhattan City Hall with just our parents. The day was perfect, it was sunny, warm and it was spent with our parents followed by a
        private lunch filled with smiles and laughter at our favorite restaurant in Hoboken, Anthony David's.</p>
      </div>
      <div>
        <h3>The big move</h3>
        <p>After living in Hoboken together for 2 years, we decided to move to Europe for 2 years to do as much traveling as we can. We have seen countless cities and countries, Madrid, Paris, Budapest, Berlin and more.
          We are excited for our friends and family to come celebrate our wedding with us and see the uniquely beautiful city we have been living in.
        </p>
      </div>
      <div>
        <h3>Our first human child, Baby Avery!</h3>
        <p>We are expecting our first born, Avery Jane Bird, on December 31st 2017. We can't wait to meet our little girl. More information to come!
        </p>
      </div>
      <div>
        <h3>The wedding</h3>
        <p>Exactly 2 years later on the date when they got married in Manhattan, we are so excited to be able to celebrate our marriage with all of our friends and family in Europe.</p>
      </div>
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: 'love-story',
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .love-story {
    text-align: center;
    padding: 1rem;
  }

  .story {
    margin: 0 auto;
  }

  .content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: center;
    justify-content: center;
    max-width: 80%;
  }
</style>
