import axios from 'axios';

const url = 'http://localhost:6000/api/animes/';

class AnimeService {
    // GET
    static getAnime() {
        return axios.get(url).then(function (response)
            {
                const data = response.data;
                const animes = data.data.map(anime => ({
                    ...anime
                }));
                return animes;
            }
        ).catch(err => {
            console.log(err);

        })
    }

    // CREATE
    static insertAnime(name, year, production, director) {
        return axios.post(url, {
            name,
            year,
            production,
            director
        });
    }

    // DELETE
    static deleteAnime(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default AnimeService;