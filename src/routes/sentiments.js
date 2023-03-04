const express = require("express");
const router = express.Router();

// const sharp = require("sharp");
// const { sendWelcomeEmail, sendCancelEmail } = require("../emails/account");

router.get("/sentiments", async (req,res)=>{
    try {
        console.log(req.body)
        res.send(req.body)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;