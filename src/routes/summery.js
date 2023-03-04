const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi, CreateCompletionRequest } = require('openai');

router.post("/summery", async (req, res) => {

    try {  
        
        let comments = ["It is a ber good product!", "It is an bad file"];

        const configuration = new Configuration({
            apiKey: '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'//commonConfigurations.openAIAPIKey,
        });
        
        const openAIApi = new OpenAIApi(configuration)

        let count = 0;
        let commonText = '';
        for (let i = 0; (count <= 17000 && i < comments?.length) ?? 0; i++) {
            commonText += comments[i];
            count = commonText.length;
        }
        const params = {
            prompt: `Write a review in bullet points summary like journalist which not consider self or I, based on these notes: ${commonText}\n Review:`,
            model: 'text-davinci-003',
            temperature: 0.9,
            max_tokens: 200,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        };

        const { data } = await openAIApi.createCompletion(params)

        console.log(data.choices[0].text)
        res.send(data.choices[0].text);

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;