// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Working',
        message: 'Welcome',
    });
});
// Import anime controller
var animeController = require('./animeController');
// anime routes
router.route('/animes')
    .get(animeController.index)
    .post(animeController.new);
router.route('/animes/:anime_id')
    .get(animeController.view)
    .patch(animeController.update)
    .put(animeController.update)
    .delete(animeController.delete);
// Export API routes
module.exports = router;