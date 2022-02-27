import Arweave from "arweave";
import { fetchFeed } from "./reddit.js";
import dotenv from "dotenv";
dotenv.config();

let jwk;

export const arweave = Arweave.init({
  host: "arweave.net",
  port: 443,
  protocol: "https",
  timeout: 20000,
  logging: false,
});

export async function archive(topics) {
  try {
    let i = 0;

      if (!jwk) {
        jwk = JSON.parse(process.env.JWK);
      }
      const data = await fetchFeed(topics);
      console.log(data.length)

      for (const post of data) {
        const body = JSON.stringify(post.child);
        const tags = post.tags;

        const tx = await arweave.createTransaction({ data: body }, jwk);
        tx.reward = (+tx.reward * 1.5).toString();

        for (let name in tags) {
          tx.addTag(name, tags[name]);
        }

        await arweave.transactions.sign(tx, jwk);
        await arweave.transactions.post(tx);

        console.log(
          `archive TXID: ${tx.id} | topic: ${post.tags["archiver-topic"]} |${i}| ${post.tags.permalink}`
        );
        i++
      }
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}
