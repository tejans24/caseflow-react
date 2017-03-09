This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Installing dependencies

### Yarn (`brew install yarn`)

`yarn install`

### npm

`npm install`


## Running the app

`npm run build` builds all the Javascript and css into the build directory. This content can be severed by a static file server.

### Without Docker

`npm start`

### Using Docker

### Build

The following command builds a docker image using the Dockerfile in the current directory and the name provided using the tag with -t argument.

`docker build -t caseflow-style-guide .`

### Running an image

This command buids the docker container using the port provided.

`docker run -d -p 3000:3000 -e PORT=5000 caseflow-style-guide`