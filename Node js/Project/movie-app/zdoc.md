# User Authentication and Cart

### USER Register
- **Username**
- **Email**
- **Password** (bcrypt encryption)
- **Confirm Password**

### USER Login
- **Email / Username**
- **Password** (bcrypt decryption)

### User Cart

---

### Important HTTP Status Codes
- **200 OK**: Request was successful.
- **201 Created**: Resource has been created successfully.
- **300 Multiple Choices**: The request has multiple possible responses.
- **301 Moved Permanently**: The resource has been moved permanently.
- **400 Bad Request**: The request is malformed or invalid.
- **401 Unauthorized**: Authentication is required and has failed or has not yet been provided.
- **402 Payment Required**: Payment is required to access the resource.
- **404 Not Found**: The resource could not be found.

---

### Types of Requests
- **req.body**: Contains data sent in a POST or PUT request.
- **req.header**: Contains HTTP headers sent with the request.
- **req.cookies**: Contains cookies sent with the request.
- **req.params**: Contains route parameters (e.g., `/user/:id`).
- **req.query**: Contains query string parameters (e.g., `/search?query=abc`).

---

### Types of Middleware
- **Application-level middleware**: Applied globally to all routes.
- **Route-specific middleware**: Applied to specific routes.
- **Built-in middleware**: Provided by Express (e.g., `express.json()`).
- **Third-party middleware**: External packages (e.g., `cors`, `body-parser`).
- **Error middleware**: Handles errors in the application.

---

### Authentication
1. **Cookie set**: Stores session data in cookies for persistence.
2. **bcrypt**: How to use encryption and decryption for passwords.
   - **Encryption**: Encrypt passwords when storing them.
   - **Decryption**: Decrypt passwords for authentication.
   
3. **JWT (JSON Web Token)**:
   - A compact, URL-safe token used to represent claims to be transferred between two parties.
   - **How to store data in JWT**: You can store user information or other claims in the payload, which is then signed to prevent tampering. Typically, JWT is stored in cookies or local storage on the client-side.
