# Shopping‑List Web Application

**Sigrid Mortensen** – [GitHub](https://github.com/SigridM) · [linkedin.com/in/sigridmortensen](https://linkedin.com/in/sigridmortensen)

---

## Overview
This is a full‑stack web application that allows users to create, manage, and share shopping lists. Designed to demonstrate end‑to‑end development, it features a modern front‑end UI, back‑end API, and cloud deployment.

---

## Key Features
- Create, edit, delete items in shopping lists
- Categorize items and mark them as purchased or pending
- Support for bulk ingredient import (if applicable)
- Responsive UI built for desktop and mobile
- RESTful API for data operations
- User authentication (if applicable) and secure data handling

---

## Technologies Used
- Front‑end: React + Redux for state management
- Back‑end: Node.js + Express (or whichever)
- Database: PostgreSQL / MySQL (or whichever)
- Deployment: Docker / Heroku / AWS (if applicable)
- Testing: Jest / Mocha / Cypress (if applicable)

---

## Architecture & Design
The application follows a layered architecture:
- **UI layer** handles components, state and user interactions
- **Service/API layer** manages data requests and business logic
- **Database layer** stores user and list data using normalized schema
Design patterns used: MVC / Flux / Repository Pattern (customize)
Focus was on code readability, testability, and maintainability.

---

## Getting Started
### Prerequisites
- Node.js vXX
- PostgreSQL/MySQL vXX
- (Optional) Docker

### Setup
```bash
git clone https://github.com/SigridM/Shopping‑List.git
cd Shopping‑List
# Front‑end setup
cd client
npm install
npm start
# Back‑end setup
cd server
npm install
npm run migrate
npm run dev
```

### Running Tests
```bash
cd server
npm test
cd ../client
npm test
```

---

## Screenshots
<img width="549" height="615" alt="Screenshot 2025-11-19 at 8 01 32 AM" src="https://github.com/user-attachments/assets/2abb8b9f-f362-47fb-ae8e-7aac9b9a4dbb" />

<img width="550" height="483" alt="Screenshot 2025-11-19 at 8 01 48 AM" src="https://github.com/user-attachments/assets/f52d9ef3-d9c0-4ba3-9a8f-fb9495aafacd" />

---

## What I Learned
- Designing and implementing a full‑stack CRUD application from scratch
- Managing state across a front‑end app with Redux
- Designing REST APIs and database schemas for performance, reliability and clarity
- Ensuring responsive UI and cross‑device compatibility
- Writing clear documentation and setup instructions

---

## License
This project is released under the MIT License. See the LICENSE file for details.
