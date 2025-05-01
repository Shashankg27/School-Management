# School API

A RESTful API built with Express.js and MySQL to manage a list of schools and return them sorted by proximity using the Haversine formula.

## Features

- Add a new school (name, address, coordinates)
- List all schools sorted by distance from a given location
- MySQL integration with automatic table creation
- Modular and clean code structure

## Technologies

- Node.js
- Express.js
- MySQL
- Railway (for deployment)
- Postman (for API testing)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MySQL running locally
- Postman (optional, for testing)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Shashankg27/School-Management.git
cd School-Management
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on `.env.example`:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=school_db
PORT=3000
```

4. Start the server:

```bash
node server.js
```

## API Endpoints

### POST `/api/addSchool`

Adds a new school.

- **Body Parameters (JSON):**
  - `name`: School name
  - `address`: School address
  - `latitude`: Latitude coordinate
  - `longitude`: Longitude coordinate

### GET `/api/listSchools?latitude=...&longitude=...`

Returns all schools sorted by distance from the provided coordinates.

## License

This project is for educational purposes.
