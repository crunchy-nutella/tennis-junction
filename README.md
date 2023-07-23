# Tennis Junction

## Installation and setup
Run `npm i` in the root directory to install all packages.

## Repo structure
```
- packages: Place for all your packages / config
    - lib: A library of your one-time configuration scripts, like firebase.js

- src: Source code of the website
    - js: All scripts
    - pages: All HTML files
    - static: All images / static assets
    - style: Bootstrap and custom styles
    - dist: Won't be created until you run the website locally; minified code generated by Parcel
    - build: Won't be created until you create a production build; also minified code generated by Parcel

package.json: The "workspaces" field tells NPM where to automatically
install packages when you run "npm install" in the root directory

package-lock.json

.env: Environment variables for API keys and other secrets
```

## Running the website locally
Run `npm run dev` in the `src` directory to run the website on `localhost:1234`.
Hot reloading is enabled by default.

## Creating a production build
Run `npm run build` in the root directory to create a minified build for serving online.
These files can be found under `src/public`.

## More info
This [guide](https://www.digitalocean.com/community/tutorials/how-to-bundle-a-web-app-with-parcel-js) should help if anything is confusing.