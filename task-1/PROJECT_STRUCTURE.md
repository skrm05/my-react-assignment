# Project Structure

/
├── public/ # Static assets that don't need module processing
├── src/ # Main source code folder
│ ├── assets/ # Imported static assets (images, fonts)
│ ├── App.jsx # Root component of the application
│ ├── main.jsx # Entry point that mounts React to the DOM
│ ├── index.css # Global stylesheet
│ └── App.css # Component-specific styles for App
├── index.html # Main HTML file serving as the application template
├── package.json # Project metadata and dependencies
└── vite.config.js # Configuration file for the Vite bundler
