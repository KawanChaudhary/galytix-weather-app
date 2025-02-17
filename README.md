# World Weather App

A responsive web application that displays weather information for countries and their capitals. It uses the OpenWeatherMap API to fetch weather data and features a dynamic, user-friendly interface built with React and Vite.

## Features

-   Display a list of countries with sorting, filtering, and pagination.
-   View weather details (temperature, precipitation, wind) for the selected country's capital.
-   Toggle between metric and imperial units.
-   Display weather icons and a moon phase component.

## Tech Stack

-   **Frontend:** React, Vite, React-Leaflet (for maps), Axios, React Query, Bootstrap 5.1.3
-   **API:** OpenWeatherMap API for weather data
-   **Map:** React-Leaflet (optional map feature)

## Setup Instructions

1.  **Clone the Repository**

    Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/world-weather-app.git
    cd world-weather-app
    ```

2.  **Install Dependencies**

    Install the required dependencies using npm:

    ```bash
    npm install
    ```

3.  **Setup Environment Variables**

    Create a `.env` file in the root directory of the project and add your API key and other configuration values. The `.env` file should look like this:

    ```env
    VITE_APP_API_KEY=your-openweathermap-api-key
    ```

    Replace `your-openweathermap-api-key` with your actual OpenWeatherMap API key.

    **Important Notes:**

    -      The environment variables must be prefixed with `VITE_` to be accessible in Vite.
    -      Do not commit your `.env` file to version control (e.g., GitHub) to keep sensitive information secure. Ensure the `.env` file is added to your `.gitignore` file.

4.  **Start the Development Server**

    Run the development server:

    ```bash
    npm run dev
    ```

    Open your browser and go to `http://localhost:5173` to view the app.

5.  **Build for Production**

    To build the project for production, run:

    ```bash
    npm run build
    ```

    This will create a `dist` folder with the production-ready code.

6.  **Deploy**

    To deploy the application, you can use various platforms like Vercel, Netlify, or GitHub Pages.

## Project Structure

```plaintext
world-weather-app/
├── .env                  # Environment variables
├── .gitignore            # Git ignore configuration
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── src/                  # Source code directory
│   ├── components/       # React components
│   ├── api/              # API calls and axios configuration
│   ├── screens/          # React pages (e.g., WeatherPage)
│   ├── router/           # React Router configuration
│   ├── assets/           # Images and Json assets
│   ├── types/            # prop and state type
│   └── endpoints/        # Endpoints for APi calls
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation