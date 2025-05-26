export default {
  name: "todos",
  description: "Todo management", 
  prefix: "/api/todos",
  auth: "required",
  routes: {
    "GET /": {
      action: "list",
      entity: "todo",
      description: "List user's todos",
      pagination: { enabled: true, defaultLimit: 20 },
      filter: { allowed: ["completed", "priority"] }
    },
    "POST /": {
      action: "create",
      entity: "todo", 
      description: "Create todo",
      validation: {
        body: {
          title: { type: "string", required: true, maxLength: 200 },
          description: { type: "string", maxLength: 1000 },
          priority: { type: "enum", enum: ["low", "medium", "high"] },
          dueDate: { type: "date" }
        }
      },
      hook: "todos/beforeCreate.ts"
    },
    "PUT /:id": {
      action: "update",
      entity: "todo",
      description: "Update todo",
      hook: "todos/beforeUpdate.ts"
    },
    "DELETE /:id": {
      action: "delete",
      entity: "todo", 
      description: "Delete todo"
    }
  }
};
