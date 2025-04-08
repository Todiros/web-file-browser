## Intro

Web File Browser is a simple web application that allows you to browse files and directories from a personal AWS S3 bucket.

## Getting Started with Web File Browser

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install the project dependencies.

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches Jest testing suite.

### `npm test:e2e`

Launches Playwright testing suite.

### `npm test:all`

Launches both Jest and Playwright testing suite.

## Compromises Made

- Minimal UI design and component styling.
- Limited testing coverage, which may leave edge cases untested.
- Suboptimal rendering of directories - potentially inefficient with large deeply nested directory tree

## Roadmap

### Next Steps

- Render and style the files and folders into the Working Directory Viewer.
- Implement authentication and authorization, and connect with S3 Bucket.
- File creation functionality.
- File deletion functionality.
- Add navigation with CRUD buttons.
- Improve accessibility, cross-browser support and responsiveness.

### Extra Features

- Incorporate interactive breadcrum bar.
- Implement files editing functionality.
- Introduce a search functionality to quickly locate files or directories.
- Add support for image files.
- Optimize the application to handle deeply nested directory structures more efficiently.
- Add drag-and-drop support.
- Enhance the UI with file previews and metadata display.
- Add support for multiple storage backends, such as GCS.
