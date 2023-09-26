# GameNest

GameNest is a CRUD project that allows users to create, read, update and delete games from a JSON-server database.

## Installation

To install the project, you need to have [Node.js] and [Angular CLI] installed on your system. Then, follow these steps:

- Clone the repository from GitHub: `git clone https://github.com/ArgonsesAngularProjects/GameNest.git`
- Navigate to the project folder: `cd GameNest`
- Install the dependencies: `npm install`
- Start the JSON-server: `cd src/app/data` then `json-server --watch db.json`
- Start the Angular app: `ng serve`

## Usage

The app will run on `http://localhost:4200/` by default. You can see the list of games on the home page, and use the buttons to add, edit or delete games. You can also search for games by name or genre using the search bar (Comming soon).

## Features

The app has the following features:

- CRUD operations on games using JSON-server as a mock backend
- Pagination and sorting of games
- Search functionality by name or genre (Comming soon)
- Form validation using Reactive Forms (Comming soon)

