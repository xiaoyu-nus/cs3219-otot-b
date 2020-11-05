// Import anime model
Anime = require('./animeModel');
// Handle index actions
exports.index = function (req, res) {
    Anime.get(function (err, animes) {
        if (err) {
            return res.status(404).send(err);
        }
        res.json({
            status: "success",
            message: "Animes retrieved successfully",
            data: animes
        });
    });
};

exports.new = function (req, res) {
    var anime = new Anime();
    anime.name = req.body.name ? req.body.name : anime.name;
    anime.director = req.body.director;
    anime.year = req.body.year;
    anime.production = req.body.production;
// save the anime and check for errors
    anime.save(function (err) {
            if (err) {
                return res.status(400).send(err);

        }
    res.status(201).json({
            message: 'New anime created!',
            data: anime,
        });
    });
};
// Handle view anime info
exports.view = function (req, res) {
    Anime.findById(req.params.anime_id, function (err, anime) {
        if (err)
            return res.status(404).send(err);
        res.json({
            message: 'Anime details loading..',
            data: anime
        });
    });
};
// Handle update anime info
exports.update = function (req, res) {
Anime.findById(req.params.anime_id, function (err, anime) {
        if (err)
        return res.status(404).send(err);
anime.name = req.body.name ? req.body.name : anime.name;
        anime.director = req.body.director;
        anime.year = req.body.year;
        anime.production = req.body.production;
// save the anime and check for errors
        anime.save(function (err) {
            if (err)
            return res.status(404).send(err);
            res.json({
                message: 'Anime Info updated',
                data: anime
            });
        });
    });
};
// Handle delete anime
exports.delete = function (req, res) {
    Anime.remove({
        _id: req.params.anime_id
    }, function (err, anime) {
        if (err)
        res.json(err);
res.json({
            status: "success",
            message: 'Anime deleted'
        });
    });
};