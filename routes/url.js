const express = require("express");
const {handleGenerateNewShortURl,handleGetAnalytics, handleRedirect} = require('../controller/url');
const URL = require("../models/url");

const router = express.Router();


router.post("/",handleGenerateNewShortURl);

router.get("/analytics/:shortId",handleGetAnalytics)

router.get('/:shortId', handleRedirect);

module.exports = router;