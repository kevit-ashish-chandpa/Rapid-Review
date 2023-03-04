const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi, CreateCompletionRequest } = require('openai');
// const sharp = require("sharp");
// const { sendWelcomeEmail, sendCancelEmail } = require("../emails/account");

router.post("/sentiments", async (req, res) => {
    try {
        let comment = "It is a ber good product!"
        const configuration = new Configuration({
            apiKey: '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'//commonConfigurations.openAIAPIKey,
        });
        const openAIApi = new OpenAIApi(configuration)

        const params = {
            prompt: `Decide whether a product comment sentiment is positive, neutral, or negative give me this words only: ${comment}`,
            model: 'text-davinci-003',
            temperature: 0.9,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        }

        const { data } = await openAIApi.createCompletion(params)

        const sentiment = {
            sentiment: data.choices[0].text
                .match(/\b(negative|positive|neutral)\b/i)[0]
                .trim()
                .toUpperCase()
        };
        console.log(sentiment, 'response before sending to client');
        res.send(sentiment);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;