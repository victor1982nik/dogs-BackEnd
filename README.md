CodeBridge Test - REST API
This is a sample REST API project that allows you to create and manage entities with the following fields: "name", "color", "tail_length", and "weight". The API provides functionality for retrieving all dogs or paginated results, as well as sorting.

Installation
Clone the repository:

git clone https://github.com/your-username/dogs-BackEnd.git
Install the dependencies:

cd dogs-BackEnd
npm install
Configuration
The application uses SQL as the database. Make sure you have a SQL server running, and configure the database connection settings in the .env file located in the root directory of the project.

PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-dbname
Running the Application
To start the application, run the following command:

npm run start
The application will be accessible at http://localhost:5000.

API Endpoints
GET /dogs
Retrieves all dogs.
Query Parameters:
pageNumber (optional): The page number for pagination.
limit (optional): The number of items per page.
attribute (optional): The attribute to sort by. (Default: "id")
order (optional): The sorting order ("asc" or "desc"). (Default: "asc")
Example Response:

[
{
"id": "1",
"name": "Fido",
"color": "Brown",
"tail_length": 30,
"weight": 50
},
{
"id": "2",
"name": "Buddy",
"color": "White",
"tail_length": 20,
"weight": 40
},
...
]

POST /dogs

Creates a new dog.

Request Body:
{
"name": "Max",
"color": "Black",
"tail_length": 25,
"weight": 45
}

Example Response:

{
"id": "3",
"name": "Max",
"color": "Black",
"tail_length": 25,
"weight": 45
}
