# Fery Rides API

## Project Overview
The **Fery Rides API** is a simple backend service to demonstrate user registration, listing available rides, and retrieving ride details. It is built with Node.js and MongoDB and follows a modular architecture for scalability.

---

## Features
- User registration with secure password storage using bcrypt.
- Authentication using JSON Web Tokens (JWT).
- Endpoints to list rides and fetch ride details.
- Mock data integration for quick testing.
- Well-structured codebase with controllers, routes, and utilities.

---

## Setup Instructions

### Prerequisites
- Node.js installed on your system.
- MongoDB database (local or hosted).
- A terminal or IDE to run commands and edit code.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd feri-rides-api
# API Endpoints Overview

## Register User
- **Endpoint:** `POST /register`
- **Request Body:**
  ```json
  {
    "username": "john_doe",
    "password": "password123"
  }

- **Response:**
   ```json
   {
     "message": "User registered successfully"
   }

## List Rides
- **Endpoint:** `GET /rides`
- **Response:**
  ```json
  {
    "rides": [
      { "id": 1, "distance": "10km", "fare": "$15" },
      { "id": 2, "distance": "25km", "fare": "$30" },
      { "id": 3, "distance": "5km", "fare": "$7" }
    ]
  }

## Ride Details
- **Endpoint:** `GET /rides/:id`
- **Response (Success):**
  ```json
  {
    "ride": { "id": 1, "distance": "10km", "fare": "$15", "details": "Point A to Point B" }
  }

- **Response (Not Found):**
  ```json
   {
     "message": "Ride not found"
   }

