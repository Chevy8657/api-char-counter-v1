const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "64kb" }));

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

app.post("/v1/char-count", (req, res) => {
  const { input } = req.body;
  if (typeof input !== "string") return res.status(400).json({ error: "Input must be a string." });

  return res.status(200).json({ count: input.length });
});

app.use((req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => console.log(`API running on port ${PORT}`));
