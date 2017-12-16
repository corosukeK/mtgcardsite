<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <figure class="image">
              <img :src="cardImage" style="width: 223px;height: 311px;display: block;margin-left: auto;margin-right: auto">
            </figure>
          </div>
          <div class="column">
            <div class="media">
              <div class="media-content">
                <p class="title">{{ card.name }}</p>
                <p class="subtitle">{{ card.type }}</p>
              </div>
            </div>
            <br>
            <div class="content">
              <article class='message is-primary' v-if='card.text'>
                <div class='message-body'>
                  <p style="white-space: pre-line">{{ card.text }}</p>
                </div>
              </article>


              <table class="table is-bordered is-striped is-narrow is-fullwidth">
                <tbody>
                <tr>
                  <th>Color</th>
                  <td>
                    <p v-for="color in card.colors">{{ color }}</p>
                  </td>
                </tr>
                <tr>
                  <th>ManaCost</th>
                  <td>{{ card.manaCost }}</td>
                </tr>
                <tr>
                  <th>Rarity</th>
                  <td>{{ card.rarity }}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{{ card.type }}</td>
                </tr>
                <tr>
                  <th>Power</th>
                  <td>{{ card.power }}</td>
                </tr>
                <tr>
                  <th>Toughness</th>
                  <td>{{ card.toughness }}</td>
                </tr>
                <tr>
                  <th>Loyalty</th>
                  <td>{{ card.loyalty }}</td>
                </tr>
                <tr>
                  <th>Artist</th>
                  <td>{{ card.artist }}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import algoliasearch from 'algoliasearch'
  import Key from '@/assets/key.js'

  export default {
    async asyncData ({store, params}) {
      var client = algoliasearch(Key.algolia.applicationId, Key.algolia.apiKey)
      var index = client.initIndex('Cards')

      var result = await index.search({
        query: '',
        facetFilters: ['multiverseid:' + params.id]
      })
      return {card: result.hits[0]}
    },
    mounted () {
      console.log(this.card)
    },
    computed: {
      cardImage: function () {
        return 'https://res.cloudinary.com/di6y1fplm/image/upload/f_auto,q_auto/' + this.card.multiverseid
      }
    }
  }
</script>
