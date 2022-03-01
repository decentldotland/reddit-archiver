import axios from "axios";

export async function fetchFeed(topics, type) {
  try {
    let mimeType = "application/json";
    let limit = 100;
    let ArchiveType = 1;

    if (type === "PRTSCR") {
      mimeType = "image/png";
      // safe lower limit because
      // screenshots size is ~ 10x
      // larger than storing metadata
      limit = 25;
      ArchiveType = 2;
    }
    const feed = [];

    for (let topic of topics) {
      const url = `https://www.reddit.com/search.json?q=${topic}&sort=new&limit=${limit}`;
      const request = await axios.get(url);

      const childs = request.data.data.children;

      for (const post of childs) {
        const child = post.data;
        const tags = {
          "App-Name": "reddit-archiver-test",
          "archive-type": ArchiveType,
          "archiver-topic": topic,
          subdreddit: child.subreddit,
          subreddit_id: child?.subreddit_id,
          permalink: child?.permalink,
          author: child?.author_fullname,
          title: child?.title,
          url: child?.url,
          reddit_timestamp: child?.created_utc,
          "Content-Type": mimeType,
        };

        feed.push({ child, tags });
      }
    }

    return feed;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}
