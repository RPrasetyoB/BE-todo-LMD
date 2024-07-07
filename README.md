# API Documentation

## Overview

This API provides endpoints for managing a Todo List application. It allows users to register, log in, and perform CRUD (Create, Read, Update, Delete) operations on their todo items.

#### Technologies Used

- **Express js**: Used as the web framework for building the API server, providing a robust and flexible foundation.
- **Prisma with PostgreSQL via Supabase**: Prisma is used as the ORM (Object-Relational Mapping) to interact with the PostgreSQL database, simplifying database operations. PostgreSQL database is hosted on Supabase, a platform providing a suite of tools and services built on top of PostgreSQL, simplifying database management and providing additional functionality real-time data handling.
- **jsonwebtoken**: This library is used for generating and verifying JWT (JSON Web Tokens) for authentication.
- **dotenv**: dotenv is used for loading environment variables from .env file.
- **bcryptjs**: bcrypt is used for hashing passwords securely.

### Postman Documentation

[BE-todo-LMD](https://documenter.getpostman.com/view/30790473/2sA3e1AVWg)

## Prerequisites

Before using the API server, ensure that you have:

- **Visual Studio Code or any IDE**.
- **Node.js**: Make sure you have Node.js version 20. You can download Node.js from [Node.js official website](https://nodejs.org/en/download).

## Authentication

The API server uses a bearer token authentication mechanism to secure endpoints. Clients are required to include a valid JWT (JSON Web Token) in the `Authorization` header of their requests.

##### Token Generation

When a user successfully login, the API server generates a JWT token and returns it to the client and stored in database user table. This token included in subsequent API requests to authenticate the user.

## Endpoints

|                    | Method | Patch                      | Auth (Bearer token) | Req.body                                                      |
| ------------------ | ------ | -------------------------- | ------------------- | ------------------------------------------------------------- |
| User registration  | POST   | *baseUrl*/v1/auth/register | no                  | username: string, real_name: string, password: string         |
| User login         | POST   | *baseUrl*i/v1/auth/login   | no                  | username: string, password: string                            |
| User detail        | GET    | *baseUrl*/v1/user          | yes                 | -                                                             |
| Create todo        | POST   | *baseUrl*/v1/todo          | yes                 | title: string, description: string, status: string            |
| Get user todo list | GET    | *baseUrl*/v1/todo          | yes                 | -                                                             |
| Update todo        | PUT    | *baseUrl*/v1/todo/:todoID  | yes                 | title: string, description: string, status: string            |
| Update status      | PATCH  | *baseUrl*/v1/todo/:todoID  | yes                 | status: string                                                |
| Delete todo        | DELETE | baseUrl*/v1/todo/:todoID   | yes                 | payment_account_id:  number, amount: number, currency: string |

#### API root : <br>

![Screenshot_8](https://github.com/RPrasetyoB/BE-todo-LMD/assets/129088807/05ba3cce-d902-40c1-904d-94536681665c)

#### Deployment:

[BE-Server](https://us-central1-develop-2c606.cloudfunctions.net/be_todo)

#### Account for testing :

```json
{
    "username": "test",
    "password": "abc123"
}
```

## Tutorial: Using the API locally

Follow these steps to use the API server:

- **Clone the Repository**: Clone the API server repository from GitHub to your local machine.
  
  ```bash
  git clone https://github.com/RPrasetyoB/payment.git
  ```

- **Navigate to the cloned directorys**:
  
  ```bash
  cd payment
  ```

- **Set Up Environment Variables**: Set `.env` according as `.env.example`

- **Install Dependencies**: Install dependencies using following command:
  
  ```bash
  npm install
  ```

- **Run the Server**: Start the API server locally using the following command:
  
  ```bash
  npm start
  ```

- The API server is ready to be consumed at port in `.env` or in port 3001 http://localhost:[port]

**Note**:
If you encounter issues with fetching data or connecting to the database, try resend request again. And if still get issue please don't hesitate to contact me. Since I'm using a free account on Supabase, the database may freeze if it's not used for a while
