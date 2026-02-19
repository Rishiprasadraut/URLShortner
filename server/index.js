const express = require('express');
const cors = require('cors');
const { connectDB } = require('./connect');
const {checkForAuth,
    restrictTo} = require("./middlewares/auth")
const URL = require('./models/url');
const path = require("path");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const urlRoute = require("./routes/url");
const staticRouter = require("./routes/StaticRouter");
const userRoute = require("./routes/user")

const app = express();
const port = 4001;

connectDB('mongodb://localhost:27017/url-shortner')
    .then(() => console.log("Mongodb connected..."))


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(checkForAuth);

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            connectSrc: ["'self'", "http://localhost:4001"],
        },
    })
);


app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", userRoute);
app.use("/", staticRouter)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    console.log(`Received shortId: ${shortId}`); // Log the incoming shortId

    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        },
        { new: true }
    );

    if (!entry) {
        console.error(`Short URL not found for shortId: ${shortId}`); // Log if entry is not found
        return res.status(404).json({ error: 'Short URL not found' });
    }

    console.log(`Redirecting to: ${entry.redirectUrl}`); // Log the redirect URL
    res.redirect(entry.redirectUrl);
})


app.listen(port, () => console.log(`Listening on port ${port}`))