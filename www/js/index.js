const app = Vue.createApp({
  data() {
    return {
      pokemons: [],
      isLoading: false,
      offset: 0,
      limit: 10,
      selectedPokemon: null,
      selectedPokemonImageUrl: '',
    };
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
    getAttackSoundUrl(pokemon) {
      return `https://play.pokemonshowdown.com/audio/cries/${pokemon}.mp3`;
    },
    playAttackSound() {
      var time = 1000;
      console.log("Vibration");
      navigator.vibrate(time);
      this.$refs.Son_attaque.play();
    },
    fetchPokemons() {
      this.isLoading = true;
      fetch(`https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=${this.limit}`)
        .then(response => response.json())
        .then(data => {
          this.pokemons = data.results;
          this.loadPokemonDetails()
            .then(() => {
              this.isLoading = false;
            })
            .catch(error => {
              console.error(error);
              this.isLoading = false;
            });
        })
        .catch(error => {
          console.error(error);
          this.isLoading = false;
        });
    },
    loadPokemonDetails() {
      const requests = this.pokemons.map(pokemon => {
        return fetch(pokemon.url)
          .then(response => response.json())
          .then(data => {
            pokemon.details = {
              name: data.name,
              sprites: data.sprites,
              stats: data.stats
            };
          })
          .catch(error => {
            console.error(error);
          });
      });
      return Promise.all(requests);
    },
    loadMorePokemons() {
      this.offset += this.limit;
      this.fetchPokemons();
    },
    selectPokemon(pokemon) {
      this.selectedPokemon = pokemon.details;
      this.selectedPokemonImageUrl = pokemon.details.sprites.front_default;
    },
  },
  template: `
    <div>
      <div v-if="isLoading">Chargement en cours...</div>
      <div v-else>
        <div class="pokemon-buttons">
          <button v-for="pokemon in pokemons" :key="pokemon.name" @click="selectPokemon(pokemon)">
            {{ pokemon.details.name }}
            <img v-if="pokemon.details.sprites && pokemon.details.sprites.front_default" :src="pokemon.details.sprites.front_default" :alt="pokemon.details.name" />
          </button>
        </div>
        <div class="pokemon-details" v-if="selectedPokemon">
          <h2>{{ selectedPokemon.name }}</h2>
          <img :src="selectedPokemonImageUrl" :alt="selectedPokemon.name" class="selected-pokemon-image" />
          <ul>
            <ul v-for="stat in selectedPokemon.stats" :key="stat.stat.name">
              {{ stat.stat.name }}: {{ stat.base_stat }}
            </ul>
            <audio ref="Son_attaque" :src="getAttackSoundUrl(selectedPokemon.name)" preload="auto"></audio>
            <button id="attack-button" class="attack-button" @click="playAttackSound()">Attaque</button>
          </ul>
        </div>
        <button @click="loadMorePokemons">Afficher 10 autres Pokémon</button>
      </div>
    </div>
  `,
});

app.mount('#app');
