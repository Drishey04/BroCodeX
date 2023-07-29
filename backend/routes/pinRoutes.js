const router = require("express").Router();
const { getPins,createPin} = require('../controllers/pinController');

router.post('/', createPin);
router.get('/', getPins);

// router.route('/').get(getPins).post(createPin);

module.exports = router;