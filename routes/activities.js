import express from "express";
var router = express.Router();

const apiUrl = "https://bored-api.appbrewery.com/random";

router.get("/getRandom", async (req, res, next) => {
    const response = await fetch(apiUrl);
    const responseJson = await response.json();
    res.send(responseJson.activity);
});

export default router;
