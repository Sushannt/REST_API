# Blog RESTful API 👩‍💻

This is a RESTful API for a blog web application that allows you to perform CRUD (Create, Read, Update, Delete) operations on articles.

## Getting Started 🚀

These instructions will help you set up and run the RESTful API on your local machine.

### Prerequisites 📋

Make sure you have the following software installed on your system:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

### Installation 🛠️

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd rest_api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add your database connection URL as `DATABASE_URL` in the `.env` file:

     ```env
     DATABASE_URL=mongodb://localhost/your-database-name
     ```

### Running the API ▶️

Start the API server using the following command:

```bash
npm start
```

The server will start, and you can access the API at `http://localhost:<PORT>`, where `<PORT>` is the port specified in your `.env` file or the default port (e.g., 3000).

## API Endpoints 🚀

### Get All Articles 📚

- **URL:** `/api/articles`
- **Method:** `GET`
- **Description:** Retrieves a list of all articles.
- **Response:** JSON array of articles.
- **Status Codes:** 200 (OK), 500 (Internal Server Error)

### Create an Article ✍️

- **URL:** `/api/articles`
- **Method:** `POST`
- **Description:** Creates a new article.
- **Request Body:** JSON object with `title` and `content`.
- **Response:** JSON object of the created article.
- **Status Codes:** 201 (Created), 400 (Bad Request), 500 (Internal Server Error)

### Get an Article by ID 🔍

- **URL:** `/api/articles/:id`
- **Method:** `GET`
- **Description:** Retrieves an article by its ID.
- **Response:** JSON object of the requested article.
- **Status Codes:** 200 (OK), 404 (Not Found), 500 (Internal Server Error)

### Update an Article by ID 🔄

- **URL:** `/api/articles/:id`
- **Method:** `PATCH`
- **Description:** Updates an article by its ID.
- **Request Body:** JSON object with `title` and/or `content` for updating.
- **Response:** JSON object of the updated article.
- **Status Codes:** 200 (OK), 400 (Bad Request), 500 (Internal Server Error)

### Delete an Article by ID 🗑️

- **URL:** `/api/articles/:id`
- **Method:** `DELETE`
- **Description:** Deletes an article by its ID.
- **Response:** Success message.
- **Status Codes:** 200 (OK), 500 (Internal Server Error)

## Built With 🛠️

- [Express.js](https://expressjs.com/) - Web application framework for Node.js
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
