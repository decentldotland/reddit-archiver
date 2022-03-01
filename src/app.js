import { archive } from "./utils/arweave.js";
import { defaultTopics } from "./utils/constants.js";
import dotenv from "dotenv";

dotenv.config();

let topics = defaultTopics;

const archivingFormat = ["METADATA", "PRTSCR"].includes(
  process.env.ARCHIVING_FORMAT
)
  ? process.env.ARCHIVING_FORMAT
  : "metadata";

if (process.env.QUERY_TOPICS) {
  topics = process.env.QUERY_TOPICS.trim().split(",");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function polling(topics, type) {
  while (true) {
    console.log(topics, type);
    await archive(topics, type);
    // in ms
    const sleep_time = 60 * 60 * 1000;
    console.log(`sleeping for ${sleep_time} ms`);
    await sleep(sleep_time);
  }
}

polling(topics, archivingFormat);
