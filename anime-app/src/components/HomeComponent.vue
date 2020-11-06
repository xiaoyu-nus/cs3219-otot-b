<template>
  <div class="container">
    <h1> Anime List</h1>
    <div class="create-anime">
      <label for="create-anime"> New Anime </label><br>
      <input type="text" id="create-anime-name" v-model="name" placeholder="Anime name">
      <input type="text" id="create-anime-year" v-model="year" placeholder="Year of production">
      <input type="text" id="create-anime-pro" v-model="production" placeholder="Produced by">
      <input type="text" id="create-anime-dir" v-model="director" placeholder="Director"><br>
      <button class="button" v-on:click="createAnime">Add</button><br>
      <label for="create-anime"> Double click to delete an anime </label><br>
    </div>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="anime"
      v-for="(anime, index) in animes"
      v-bind:item="anime"
      v-bind:index="index"
      v-bind:key="anime._id"
      v-on:dblclick="deleteAnime(anime._id)"
    >
     <p class="name">{{anime.name}}</p>
     <p class="year">{{anime.year}}</p>
     <span class="info">Production: {{anime.production}}</span><span class="info">Director: {{anime.director}}</span>
    </div>
  </div>
</template>

<script>
import AnimeService from '../AnimeService';

export default {
  name: 'HomeComponent',
  data() {
    return {
      animes: [],
      error: '',
      name: '',
      year: '',
      production: '',
      director: '',
    }
  },
  async created() {
    try {
      this.animes = await AnimeService.getAnime();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createAnime() {
      await AnimeService.insertAnime(this.name, this.year, this.production, this.director);
      this.animes = await AnimeService.getAnime();
    },
    async deleteAnime(id) {
      await AnimeService.deleteAnime(id);
      this.animes = await AnimeService.getAnime();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.anime {
  position: relative;
  border: 1px solid #f5f5f5;
  background-color:  #e9ebf5;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

p.year {
    font-size: 18px;
    color: #333;
  font-weight: 600;
}

p.name {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}

span.info {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
  padding:10px 10px 30px 10px;
}

.button {
  font-size: 16px;
  font-weight: 500;
  background-color: #8599d1;
  padding:10px 10px 10px 10px;
  margin: 10px 10px 10px 0px;
  border: 1px solid #f5f5f5;
  color: white;
  border-radius: 2em;
  width: 20%;
}

input {
  align-content: left;
  margin: 10px 10px 10px 10px;
  width: 40%;
  padding:10px 10px 10px 10px;
  border: 2px solid #82a0ca;
  border-radius: 2em;
}

:focus {
  outline: none;
}

</style>
