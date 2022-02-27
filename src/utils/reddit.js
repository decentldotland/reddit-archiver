import axios from "axios";

export async function fetchFeed(topics) {
  try {
    const feed = [];

    for (let topic of topics) {
      const url = `https://www.reddit.com/search.json?q=${topic}&sort=new&limit=100`;
      const request = await axios.get(url);

      const childs = request.data.data.children;

      for (const post of childs) {
        const child = post.data;
        const tags = {
          "App-Name": "reddit-archiver",
          "archiver-topic": topic,
          subdreddit: child.subreddit,
          subreddit_id: child?.subreddit_id,
          permalink: child?.permalink,
          author: child?.author_fullname,
          title: child?.title,
          url: child?.url,
          reddit_timestamp: child?.created_utc,
          "Content-Type": "application/json",
        };

        feed.push({ child, tags });
      }
    }

    return feed;
  } catch (error) {
    console.log(`${error.name} : ${error.description}`);
  }
}
