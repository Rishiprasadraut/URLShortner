const { nanoid } = require('nanoid');
const URL = require('../models/url');


async function handleGenerateNewShortURl(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required' });
    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    return res.render("home", { id: shortID });
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    if (!result) {
        return res.status(404).json({ error: "Analytics not found" });
    }
    return res.json({ totalVisits: result.visitHistory.length, visitHistory: result.visitHistory });
}

async function handleRedirect(req, res) {
    const shortId = req.params.shortId;
    const url = await URL.findOne({ shortId });

    if (!url) {
        return res.status(404).send("Short URL not found");
    }

    // Update visitHistory with the current timestamp
    url.visitHistory.push({ timestamp: Date.now() });
    await url.save();

    // Redirect to the original URL
    res.redirect(url.redirectUrl);
}

module.exports = {
    handleGenerateNewShortURl,
    handleGetAnalytics,
    handleRedirect,
};