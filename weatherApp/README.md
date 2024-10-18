# Weather App 🌦️

A simple and beautiful Weather App built with **React** and **Tailwind CSS**. It allows users to search for weather information by city and stores recent searches for quick access. The app fetches real-time weather data using the **WeatherAPI**.

## Features ✨

- **Real-time Weather Data**: Get up-to-date weather information including temperature, condition, wind speed, and humidity.
- **Recent Searches**: Stores up to 5 recent city searches for quick access.
- **Responsive Design**: Built with Tailwind CSS, the app is mobile-friendly and adapts to different screen sizes.
- **Local Storage**: Keeps recent searches even after the page is refreshed.

## Screenshots 📸

|         Search for Weather          |                View Weather Data                |                Manage Recent Searches                 |
| :---------------------------------: | :---------------------------------------------: | :---------------------------------------------------: |
| ![Search](./screenshots/search.png) | ![Weather Data](./screenshots/weather-data.png) | ![Recent Searches](./screenshots/recent-searches.png) |

## Technologies Used 🛠️

- **React**: Front-end library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **WeatherAPI**: API for fetching real-time weather data.

## Getting Started 🚀

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
- **WeatherAPI Key**: Sign up at [https://www.weatherapi.com/](https://www.weatherapi.com/) to obtain a free API key.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   Install dependencies:
   ```

bash
Copy code
npm install
Set up your API Key:

Open WeatherApp.js and replace YOUR_API_KEY with your WeatherAPI key:
javascript
Copy code
const apiKey = 'YOUR_API_KEY';
Start the development server:

bash
Copy code
npm start
Open the app in your browser:

bash
Copy code
http://localhost:3000
Usage 📝
Enter a city name in the input field and click "Get Weather".
View the weather data including temperature, condition, wind speed, and humidity.
The searched city is added to the Recent Searches section.
Click on a recent search to quickly retrieve weather data for that city.
Use the "Delete" button next to each recent search to remove it from the list.
Project Structure 📂
bash
Copy code
.
├── public
├── src
│ ├── components
│ │ └── WeatherApp.js # Main weather component
│ ├── App.js # Main App file
│ ├── index.js # Entry point
│ └── index.css # Tailwind CSS styles
├── .gitignore
├── package.json
└── README.md
License 📝
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments 🙌
WeatherAPI for providing weather data.
Tailwind CSS for the styling framework.
React for building the user interface.
Contributing 🤝
Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
Contact 📬
If you have any questions or feedback, feel free to reach out:

Your Name: Vasu Singla
Email: your.email@example.com
