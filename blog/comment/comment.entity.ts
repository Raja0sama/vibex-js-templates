export default {
  name: "comment",
  description: "Post comment",
  fields: {
    id: { type: "uuid", primary: true },
    content: { type: "text", required: true },
    status: { type: "enum", enum: ["pending", "approved", "rejected"], default: "pending" },
    isReply: { type: "boolean", default: false }
  },
  relations: {
    author: { type: "many-to-one", target: "user", nullable: false },
    post: { type: "many-to-one", target: "post", nullable: false },
    parent: { type: "many-to-one", target: "comment", nullable: true }
  },
  timestamps: true
};
