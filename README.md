<p align="center">
  <a href="https://decent.land">
    <img src="./src/utils/img/logo25.png" height="124">
  </a>
  <h3 align="center"><code>@decentdotland/reddit-archiver</code></h3>
  <p align="center">archiving Reddit's feeds on Arweave</p>
</p>

## Synopsis
In order to participate with the efforts of the communities of Arweave network in archiving public data about the Ukrainian-Russia war, the `reddit-archiver` repository is a customisable nodeJS server to pull feeds about a topic from Reddit, and archive it permanently on Arweave.


## Usage

create a `.env` file with the following key-value pairs:
- JWK : your wallet's keyfile
- QUERY_TOPICS (optional) : topic's keywords separated by commas (`russia,ukrain,war`)
- ARCHIVING_FORMAT (optional): PRTSCR (screenshots) or METADATA (JSON). Default format is `METADATA`

By omitting `2nd` & `3rd` key-value pairs, the server will switch to the default pre-declared values. Omitting `1st` requires hardcoding the parsed string value of your `jwk` in `./src/utils/arweave.js` (not recommended).

Archiving screenshots make use of `puppeteer`  that installs a new Chromium

From Puppeteer's [repository](https://github.com/puppeteer/puppeteer#readme):
> When you install Puppeteer, it downloads a recent version of Chromium (170MB Mac, 282MB Linux, 280MB Win) that is guaranteed to work with the API

### Running it
Head to the repo's directory and run in shell:

```sh
npm run archive
```
#### Note
Archiving under `"METADATA"` format (`application/json`) is ~10x lower than `"PRTSCR"` (`image/png`)
### Future usage
The server is customisable to archive about any topic declared in `QUERY_TOPICS`


> currently we maintain an archiving instance
> under [rRX4BQtmVuqnOtixO6BFZc1iCNbAdseFM5PXQTfS_hI](https://viewblock.io/arweave/address/rRX4BQtmVuqnOtixO6BFZc1iCNbAdseFM5PXQTfS_hI)

## License
This project is licensed under the [MIT](./LICENSE) license.
