<template>
  <div>
    <div>
      <div class="container" style="padding-left: 5%;padding-right: 5%">
        <div class="column">
          <label class="subtitle" style="">Search</label>
        </div>
        <div class="field has-addons">
          <input class="input" v-model="algoliaResults.name"/>
        </div>
        <div class="container">
          <div class="columns is-mobile is-multiline is-centered">
            <div class="column is-narrow" v-for="card in algoliaResults.data" :key="card.id">
              <router-link :to="detailUrl(card)">
                <figure class="image" style="width: 111px;height: 155px">
                  <img :src="cardImage(card)">
                </figure>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
  import algoliasearch from 'algoliasearch'
  import Key from '@/assets/key.js'
  export default {
    data () {
      var client = algoliasearch(Key.algolia.applicationId, Key.algolia.apiKey)
      var index = client.initIndex('Cards')

      return {
        algoliaResults: {
          data: [],
          name: ''
        },
        client: client,
        index: index
      }
    },
    mounted: function () {
      this.index.search(this.algoliaResults.name, function (err, content) {
        if (err) {
          throw err
        }
        this.algoliaResults.data = content.hits
      }.bind(this))
    },
    methods: {
      detailUrl: function (card) {
        return '/cards/detail/' + card.multiverseid
      },
      cardImage (card) {
        return 'https://res.cloudinary.com/di6y1fplm/image/upload/c_thumb,f_auto,h_155,q_auto,w_111/' + card.multiverseid
      }
    },
    watch: {
      'algoliaResults.name': function () {
        this.index.search(this.algoliaResults.name, function (err, content) {
          if (err) {
            throw err
          }
          this.algoliaResults.data = content.hits
        }.bind(this))
      }
    }
  }
</script>
