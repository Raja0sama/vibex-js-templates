export default {
  name: "auth",
  description: "Authentication",
  prefix: "/api/auth", 
  auth: "none",
  routes: {
    "POST /register": {
      action: "create",
      entity: "user",
      description: "Register new user",
      validation: {
        body: {
          name: { type: "string", required: true },
          email: { type: "email", required: true },
          password: { type: "string", required: true, minLength: 8 }
        }
      },
      response: { exclude: ["password"] },
      hook: "auth/register.ts"
    },
    "POST /login": {
      action: "custom",
      description: "User login", 
      validation: {
        body: {
          email: { type: "email", required: true },
          password: { type: "string", required: true }
        }
      },
      hook: "auth/login.ts"
    }
  }
};
