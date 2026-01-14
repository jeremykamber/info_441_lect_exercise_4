import express from "express";
var router = express.Router();

const apiUrl = "https://www.boredapi.com/api/activity";

router.get("/getRandom", async (req, res, next) => {
    const response = await fetch(apiUrl);
    const responseJson = await response.json();
    res.send(responseJson);
});

export default router;
