
# TaskJira Application

This is a full-stack application for managing tasks, built using Spring Boot for the backend and React.js for the frontend. It allows users to create, update, delete, and view tasks, along with pagination and search functionality.


## Technologies Used

## Backend (Spring Boot)

1-) Spring Boot 3.x

2-) Spring Data JPA (Hibernate)

3-) PostgreSQL

4-) Maven

## Frontend (React.js)

1-) React 18.x

2-) Bootstrap 5

3-) React Router DOM
## Installation

1-)Backend (Spring Boot)

```bash
  git clone https://github.com/ilkayseferli/SpringReactJira.git
  cd task-spring
```
2-)Configure PostgreSQL: Make sure PostgreSQL is running locally and the database configuration in application.properties is correct:

```bash
spring.datasource.url=jdbc:postgresql://localhost:5432/jira
spring.datasource.username=your_postgres_username
spring.datasource.password=your_postgres_password
spring.jpa.hibernate.ddl-auto=update
```
3-)Install Maven dependencies: Run the following command to download and install dependencies:

```bash
  mvn clean install
```

4-)Run the Spring Boot application:

```bash
  mvn spring-boot:run
```

5-) The backend will be available at http://localhost:8080

Frontend (React)

1-) Navigate to the frontend directory:

```bash
  cd ../task-react
```

2-) Install dependencies: Run the following command to install React dependencies:

```bash
  npm install
```

3-) Start the React development server:
```bash
  npm run dev
```

4-) The React application will be available at http://localhost:5173

## Usage

Backend Usage

1-) Once the Spring Boot server is running, you can interact with the API at http://localhost:8080/api/tasks.

API endpoints: 

POST /api/tasks/add-task – Add a new task.

GET /api/tasks/get-all-task – Get a paginated list of tasks.

GET /api/tasks/get-all-task-by-title/{key} – Get tasks by title.

PUT /api/tasks/update-task/{id} – Update a task by ID.

DELETE /api/tasks/delete-task/{id} – Delete a task by ID.

Frontend Usage

1-) Open http://localhost:3000 to view the application.

2-) You can add, edit, delete, and search for tasks using the interface.

3-) Pagination and search functionalities are built into the task listing.

API Endpoints

GET	/api/tasks/get-all-task	Get all tasks (paginated)

GET	/api/tasks/get-task/{id}	Get task by ID

POST	/api/tasks/add-task	Add a new task

PUT	/api/tasks/update-task/{id}	Update task by ID

DELETE	/api/tasks/delete-task/{id}	Delete task by ID

GET	/api/tasks/get-all-task-by-title/{key}	Get tasks by title (paginated)
