export default {
  name: "users",
  description: "User management",
  prefix: "/api/users",
  auth: "required",
  routes: {
    "GET /": {
      action: "list",
      entity: "user",
      description: "List users",
      response: { exclude: ["password"] }
    },
    "GET /:id": {
      action: "read",
      entity: "user",
      description: "Get user by ID",
      response: { exclude: ["password"] }
    }
  }
};
