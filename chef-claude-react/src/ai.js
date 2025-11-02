import Anthropic from "@anthropic-ai/sdk"


const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention but make sure those additional ingredients in the recipe are labeled OPTIONAL and does not effect the main dish just incase the user does not have the ingredients, and try not to include too many extra ingredients. In addition, include the instructions for the optional ingredients too and label each instruction optional just incase the user does have them on hand. Please make sure to ONLY use the ingredients the user mentions for the main recipe, if it is not an ingredient mentioned by the user make it OPTIONAL for the dish. Also, take into account different situations for certain ingredients (e.g. if the rice is 1 minute rice or needs to manually be cooked in a pot or if a pan is used for cooking something like beef for example, or if its cooked at home (some people dont have a wok), etc). Format your response in markdown to make it easier to render to a web page
`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_CHEF_CLAUDE_API_KEY,

    dangerouslyAllowBrowser: true,
})

export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    const msg = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
        ],
    });
    return msg.content[0].text
}
