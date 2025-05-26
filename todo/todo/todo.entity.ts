export default {
  name: "todo",
  description: "Todo item",
  fields: {
    id: { type: "uuid", primary: true },
    title: { type: "string", required: true, length: 200 },
    description: { type: "text", nullable: true },
    completed: { type: "boolean", default: false },
    priority: {
      type: "enum",
      enum: ["low", "medium", "high"],
      default: "medium"
    },
    dueDate: { type: "date", nullable: true }
  },
  relations: {
    user: { type: "many-to-one", target: "user", nullable: false }
  },
  timestamps: true
};
