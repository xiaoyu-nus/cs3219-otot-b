import axios from 'axios';

const url = 'api/animes/';

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
        }).catch((err) => console.log(err.response));
    }

    // DELETE
    static deleteAnime(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default AnimeService;