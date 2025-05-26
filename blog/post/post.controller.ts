export default {
  name: "posts",
  description: "Blog posts",
  prefix: "/api/posts",
  routes: {
    "GET /": {
      action: "list",
      entity: "post",
      description: "List published posts",
      pagination: { enabled: true, defaultLimit: 10 },
      filter: { 
        allowed: ["status", "author"],
        default: { status: "published" }
      },
      response: {
        relations: ["author"],
        exclude: ["author.password", "author.email"]
      }
    },
    "GET /:slug": {
      action: "read",
      entity: "post",
      description: "Get post by slug",
      response: {
        relations: ["author", "comments.author"],
        exclude: ["author.password", "comments.author.password"]
      }
    },
    "POST /": {
      action: "create",
      entity: "post",
      auth: "required",
      description: "Create post",
      validation: {
        body: {
          title: { type: "string", required: true, maxLength: 200 },
          content: { type: "string", required: true },
          excerpt: { type: "string", maxLength: 500 },
          tags: { type: "array" },
          status: { type: "enum", enum: ["draft", "published"] }
        }
      },
      hook: "posts/beforeCreate.ts"
    },
    "PUT /:id": {
      action: "update",
      entity: "post",
      auth: "required",
      description: "Update post",
      hook: "posts/beforeUpdate.ts"
    }
  }
};
