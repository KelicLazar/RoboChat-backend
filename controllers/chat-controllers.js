const { Configuration, OpenAIApi } = require("openai");

const newMessage = async (req, res, next) => {
  const { chat } = req.body;

  const newChat = chat.map((message) => {
    const { id, ...rest } = message;
    return rest;
  });

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  let answer;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: newChat,
      max_tokens: 700,
    });
    answer = completion.data.choices[0].message;
  } catch (error) {
    answer = {
      role: "error",
      content:
        "We're sorry, an unknown error has occurred. Please try again later or contact support if the issue persists. Thank you for your patience and understanding.",
    };
  }

  res.status(201).json({ message: answer });
};

exports.newMessage = newMessage;
