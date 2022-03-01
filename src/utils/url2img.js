import puppeteer from "puppeteer";
import { readFileSync } from "fs";

export async function prtScr(url) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    await page.goto(url, { waitUntil: "networkidle2", timeout: 90000 });
    await page.screenshot({ path: "./temporar.png" });

    const img = readFileSync("./temporar.png").buffer;

    await browser.close();

    return img;
  } catch (error) {
    console.log(error);
  }
}
