import { join } from "path";

export default {
  discovery: {
    mode: 'auto',
    rootDir: 'entities',
    cache: true,
    patterns: {
      entities: '**/*.entity.*',
      controllers: '**/*.controller.*'
    }
  },
  database: {
    type: "sqlite",
    connection: process.env.DB_CONNECTION || "sqlite://./vibejs_todo.db"
  },
  auth: {
    jwt: {
      secret: process.env.JWT_SECRET || "your-super-secret-jwt-key-change-in-production",
      expiresIn: "24h"
    },
    bcrypt: { rounds: 12 }
  },
  hooks: {
    directory: join(import.meta.dir, "hooks"),
    autoLoad: true
  },
  middleware: {
    global: [
      {
        type: 'cors',
        priority: 10,
        config: { origin: ['http://localhost:3000', 'http://localhost:5173'] }
      }
    ],
    routes: [
      {
        type: 'rateLimit',
        path: '/api/auth*',
        priority: 20,
        config: { windowMs: 15 * 60 * 1000, max: 10 }
      },
      {
        type: 'rateLimit',
        path: '/api*',
        priority: 25,
        config: { windowMs: 15 * 60 * 1000, max: 100 }
      },
      {
        type: 'auth',
        path: '/api/todos*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        priority: 30
      },
      {
        type: 'auth',
        path: '/api/auth/me',
        priority: 30
      }
    ]
  },
  features: {
    gracefulShutdown: true,
    errorHandling: true,
    healthChecks: true,
    metrics: true
  }
};
