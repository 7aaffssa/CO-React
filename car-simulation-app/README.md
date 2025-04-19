# Car Simulation App

This project is a web application that allows users to simulate the purchase value of different cars based on various parameters such as brand, model, and additional options. The application features an intuitive user interface and utilizes Redux for state management.

## Features

- **Car List**: View a list of available cars for purchase.
- **Car Details**: Click on a car to view detailed information including brand, model, fuel type, and technical specifications.
- **Car Simulation**: Input car details to simulate the total purchase price based on selected options and taxes.
- **Simulation History**: Keep track of past simulations performed by the user.

## Technologies Used

- React
- Redux
- React Router
- CSS

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/car-simulation-app.git
   ```
2. Navigate to the project directory:
   ```
   cd car-simulation-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to view the application.

## File Structure

```
car-simulation-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── CarList.js
│   │   ├── CarDetail.js
│   │   ├── CarSimulation.js
│   │   ├── SimulationHistory.js
│   │   └── Navbar.js
│   ├── redux
│   │   ├── actions
│   │   │   └── simulationActions.js
│   │   ├── reducers
│   │   │   ├── index.js
│   │   │   └── simulationReducer.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
│   └── styles
│       └── App.css
├── package.json
├── README.md
└── .gitignore
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or new features.

## License

This project is licensed under the MIT License.