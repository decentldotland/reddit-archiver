import { archive } from "./utils/arweave.js";
import { defaultTopics } from "./utils/constants.js";

import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

let topics = defaultTopics;

if (process.env.QUERY_TOPICS) {
  topics = process.env.QUERY_TOPICS.trim().split(",");

}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

app.get("/archive", async (req, res) => {
  res.send(`topics: ${topics.toString()}`);
  await polling(topics);
});

app.listen(port, () => {
  console.log(`listening at PORT:${port}`);
});

async function polling(topics) {
  while (true) {
    await archive(topics);
    // in ms
    const sleep_time = 60 * 60 * 1000;
    console.log(`sleeping for ${sleep_time} ms`);
    await sleep(sleep_time);
  }
}
