const express = require('express');
const {PathNames} = require('../routesNames');
const router = express.Router();

const responseEmpty = require('../../dtos/messageResponse')

router.use((req, res, next) => {
  console.log("Home route, time response", Date.now());
  next()
})

router.get(PathNames.HOME_PATH, (req, res) => {
  res.status(200).json(responseEmpty("Get Method Invoked"));
})

router.post(PathNames.HOME_PATH,(req,res)=>{
  res.status(200).json(responseEmpty("Post method invoked"));
})

router.put(PathNames.HOME_PATH,(req,res)=>{
  res.status(200).json(responseEmpty("Put method invoked"));
})

router.all(PathNames.ALL,(req,res)=>{
  res.status(405).json(responseEmpty("method invoked not allowed"));
})

module.exports = router;
