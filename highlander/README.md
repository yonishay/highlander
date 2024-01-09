High Lander Tech Test project 
This project features a dynamic mini-game that simulates a navigation challenge. Players navigate a ball marker to a randomly generated goal marker on an interactive map.

## Client

The client application is responsible for rendering the game interface, handling user input, and communicating with the server.

### Getting Started

To get started with the client, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the client directory.
3. Install the project dependencies using npm or yarn.
4. Start the development server.
5. Open your web browser and visit `http://localhost:3000` to play the game.
## Server

The server application is responsible for generating random goal positions and checking if the ball has reached the goal in the navigation challenge.

### Getting Started

To get started with the server, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the server directory.
3. Install the project dependencies using npm or yarn.
4. Start the server.
5. The server will be running at `http://localhost:3000`.

### API Endpoints

- `/api/goals/generateGoal`: Generates a random goal position within a specified radius.
- `/api/goals/checkGoal`: Checks if the ball has reached the goal based on the ball and goal positions.

