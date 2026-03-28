export default function handler(req, res) {
  if (req.method === "POST") {
    const { input } = req.body;

    return res.status(200).json({
      output: "AI Agent Response: " + input
    });
  }

  return res.status(200).json({
    message: "AI Agent is running 🚀"
  });
}