
const responseEmpty = require('../../dtos/messageResponse')

function getHomeRoot(req, res) {
    res.status(200).json(responseEmpty("Get method invoked"));
}

function postHomeRoot(req, res) {
    res.status(200).json(responseEmpty("Post method invoked"));
}

function putHomeRoot(req, res) {
    res.status(200).json(responseEmpty("Put method invoked"));
}

function allHomeRoot(req, res) {
    res.status(405).json(responseEmpty("Method invoked not allowed"));
}

module.exports = {
    getHomeRoot,postHomeRoot,putHomeRoot,allHomeRoot
} 