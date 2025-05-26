export default {
  name: "user",
  description: "Todo app user",
  fields: {
    id: { type: "uuid", primary: true },
    email: { type: "email", required: true, unique: true },
    password: { type: "password", required: true },
    name: { type: "string", required: true, length: 100 },
    isActive: { type: "boolean", default: true }
  },
  timestamps: true
};
