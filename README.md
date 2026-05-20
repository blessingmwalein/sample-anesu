# Calculator API

A simple Express-based Calculator API that performs basic arithmetic operations.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/blessingmwalein/sample-anesu.git
   cd sample-anesu/sample-anesu
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Server

Start the server using:
```bash
npm run start
```
The server will be running on `http://localhost:3007`.

## API Endpoints

### 1. Health Check
- **URL**: `/`
- **Method**: `GET`
- **Response**: `{ "message": "Calculator API Running" }`

### 2. List Users
- **URL**: `/users`
- **Method**: `GET`
- **Response**: `{ "users": ["Alice", "Bob", "Charlie"] }`

### 3. Calculate
- **URL**: `/calculate`
- **Method**: `POST`
- **Body** (JSON):
  ```json
  {
    "a": 5,
    "b": 10,
    "operation": "add"
  }
  ```
  Note: `operation` can be "add", "subtract", "multiply", or "divide".
- **Response**:
  ```json
  {
    "number1": 5,
    "number2": 10,
    "operation": "add",
    "result": 15
  }
  ```

## Testing

You can test the API using `curl` or tools like Postman.

### Test Calculate Endpoint
```bash
curl -X POST http://localhost:3007/calculate \
     -H "Content-Type: application/json" \
     -d '{"a": 10, "b": 20, "operation": "add"}'
```
