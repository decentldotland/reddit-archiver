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
- PORT (optional) : default port

By omitting `2nd` & `3rd` pairs, the server will switch to the default pre-declared values. Omitting `1st` requires hardcoding the parsedstring value of your `jwk` in `./src/utils/arweave.js` (not recommended).

### Running it
In shell:

```sh
npm run archive
```

then in browser: `http://localhost:{PORT}/archive`

### Future usage
The server is customisable to archive about any topic declared in `QUERY_TOPICS`


> currently we maintain an archiving instance
> under [rRX4BQtmVuqnOtixO6BFZc1iCNbAdseFM5PXQTfS_hI](https://viewblock.io/arweave/address/rRX4BQtmVuqnOtixO6BFZc1iCNbAdseFM5PXQTfS_hI)

## License
This project is licensed under the [MIT](./LICENSE) license.