const express = require("express");
let axios = require("axios");
const app = express();

app.use(express.json());

app.post("/", async function (req, res, next) {
  try {
    let developerInfo = []
    let developers = req.body.developers;
 
    for (let i=0; i<developers.length; i++) {
      let newDev = await axios.get(`https://api.github.com/users/${developers[i]}`);
      developerInfo.push(newDev)
    }

    let out = developerInfo.map((r) => ({ name: r.data.name, bio: r.data.bio }));

    return res.json(out);
  } catch (err) {
    next(err);
  }
});

app.listen(3000);
