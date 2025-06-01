import { VibeApp } from 'vibex';

const config = {
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  discovery: {
    mode: "auto" as const,
    rootDir: '.',
    cache: false,
    patterns: {
      entities: '**/*.entity.{ts,js,json}',
      controllers: '**/*.controller.{ts,js,json}',
      hooks: '**/*.hook.{ts,js}'
    }
  },
  {{#if (eq database 'sqlite')}}
  database: {
    type: 'sqlite' as const,
    connection: 'sqlite://./{{projectName}}.db',
    synchronize: true,
    logging: false
  },
  {{else}}
  {{#if (eq database 'postgresql')}}
  database: {
    type: 'postgresql' as const,
    connection: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/{{projectName}}',
    synchronize: true,
    logging: false
  },
  {{else}}
  database: {
    type: 'mysql' as const,
    connection: process.env.DATABASE_URL || 'mysql://user:password@localhost:3306/{{projectName}}',
    synchronize: true,
    logging: false
  },
  {{/if}}
  {{/if}}
  features: {
    swagger: true,
    metrics: true,
    schema: true
  },
  security: {
    jwt: {
      secret: process.env.JWT_SECRET || 'your-secret-key-here-change-in-production'
    }
  }
};

const app = new VibeApp(config);

app.start().catch(console.error);
