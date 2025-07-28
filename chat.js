
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Solo POST permitido" });
    return;
  }
  const { message } = req.body;
  if (!message) {
    res.status(400).json({ error: "No hay mensaje" });
    return;
  }
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
      max_tokens: 1000,
    });
    const reply = completion.data.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error con OpenAI API" });
  }
}
