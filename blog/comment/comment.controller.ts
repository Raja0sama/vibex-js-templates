export default {
  name: "comments",
  description: "Post comments",
  prefix: "/api/comments",
  routes: {
    "GET /": {
      action: "list",
      entity: "comment",
      description: "List approved comments",
      filter: {
        allowed: ["post", "author"],
        default: { status: "approved" }
      },
      response: {
        relations: ["author"],
        exclude: ["author.password", "author.email"]
      }
    },
    "POST /": {
      action: "create",
      entity: "comment",
      auth: "required",
      description: "Create comment",
      validation: {
        body: {
          content: { type: "string", required: true, maxLength: 1000 },
          postId: { type: "uuid", required: true },
          parentId: { type: "uuid" }
        }
      },
      hook: "comments/beforeCreate.ts"
    }
  }
};
