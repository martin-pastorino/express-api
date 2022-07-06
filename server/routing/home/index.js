const express = require('express');
const { PathNames } = require('../routesNames');
const router = express.Router();
const { getHomeRoot, postHomeRoot, putHomeRoot, allHomeRoot } = require('./handlers');

// GET
router.get(PathNames.HOME_PATH, getHomeRoot)

// POST
router.post(PathNames.HOME_PATH, postHomeRoot)

// PUT
router.put(PathNames.HOME_PATH, putHomeRoot)

// ALL
router.all(PathNames.ALL, allHomeRoot)

module.exports = router;
