
const Anthropic = require('@anthropic-ai/sdk').Anthropic;
require('dotenv').config();
 
console.log(process.env.Api_Key)
const apiUrl = `https://api.anthropic.com/v1`
async function callopenApi(params) {
    try {
    
        var content
         var location = params.location
         if(params.location){
            content = `Suggest me destinations near ${location} within 500 km with travel routes.`
         }
         if(params.destinationName){
            let destinationName = params.destinationName
            content = `please give me the cheapest travel mode, hotels, famous food & locations to watch at ${destinationName}`
         }
        // let Apimessage = ''
        const anthropic = new Anthropic({
            apiKey: "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"
          });
            //console.log("🚀 ~ callopenApi ~ apiKey:", apiKey)
          const msg = await anthropic.messages.create({
            model: "claude-3-opus-20240229",
            max_tokens: 1024,
            messages: [{ role: "user", content: content }],
          });
          console.log('msg......->>>>>.',msg)
          return msg
    
    } catch (error) {
        console.log("🚀 ~ error:", error)
        
      }
}


  module.exports = {
    callopenApi,
  };
//module.export = new genericService()