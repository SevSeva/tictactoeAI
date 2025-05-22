# React Tic-Tac-Toe Application

This project is a simple Tic-Tac-Toe game built with React.

## Setup and Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies**:
    This project uses Node.js and npm for package management. Ensure you have Node.js installed.
    Navigate to the project's root directory (where `package.json` is located) and run:
    ```bash
    npm install
    ```
    This will install all the necessary dependencies defined in `package.json`.

## Building the Application

To create a production-ready build of the application, run the following command from the project root:

```bash
npm run build
```
This command uses Webpack to bundle the application. The output files will be placed in the `dist/` directory. The main bundle will be `dist/bundle.js`, and the HTML entry point will be `dist/index.html`.

## Running the Application

After building the application, you can run it by simply opening the `dist/index.html` file in your web browser.

For a better development experience with live reloading, you can use a development server. This project is configured to work with `webpack-dev-server`.

1.  **Install `webpack-dev-server`** (if not already installed globally or as a project dev dependency):
    ```bash
    npm install --save-dev webpack-dev-server
    ```

2.  **Add a start script** to your `package.json` under the `scripts` section:
    ```json
    "scripts": {
      "build": "webpack",
      "start": "webpack serve --open"
    }
    ```

3.  **Run the development server**:
    ```bash
    npm run start
    ```
    This will typically open the application in your default web browser at `http://localhost:3000`.
