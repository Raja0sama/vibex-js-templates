export default {
  name: "post",
  description: "Blog post",
  fields: {
    id: { type: "uuid", primary: true },
    title: { type: "string", required: true, length: 200 },
    slug: { type: "string", required: true, unique: true },
    excerpt: { type: "text", nullable: true },
    content: { type: "text", required: true },
    status: { type: "enum", enum: ["draft", "published", "archived"], default: "draft" },
    tags: { type: "json", nullable: true },
    viewCount: { type: "number", default: 0 },
    publishedAt: { type: "date", nullable: true }
  },
  relations: {
    author: { type: "many-to-one", target: "user", nullable: false }
  },
  indexes: [
    { name: "idx_post_slug", fields: ["slug"] },
    { name: "idx_post_status", fields: ["status"] }
  ],
  timestamps: true
};
