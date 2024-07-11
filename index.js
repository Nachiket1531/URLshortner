const express = require("express");
const app = express();
const PORT = 8001;
const urlRoutes = require("./Routes/urlRoutes");
const db = require("./Connection/db");
const URL = require("./Model/url");

app.use(express.json());

app.use("/url", urlRoutes);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
