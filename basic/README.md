# {{projectName}}

A VibeJS application.

## Getting Started

1. Install dependencies:
   ```bash
   bun install
   ```

2. Start the development server:
   ```bash
   bun run dev
   ```

3. Visit your application:
   - API: http://localhost:3000
   - Documentation: http://localhost:3000/swagger

## Project Structure

```
{{projectName}}/
├── app.ts              # Main application entry point
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── entities/           # Database entity definitions
└── controllers/        # API controller definitions
```

## Adding Entities

Create JSON files in the `entities/` directory:

```json
{
  "name": "User",
  "tableName": "users",
  "fields": {
    "id": {
      "type": "number",
      "primary": true,
      "autoIncrement": true
    },
    "name": {
      "type": "string",
      "required": true
    }
  }
}
```

## Adding Controllers

Create JSON files in the `controllers/` directory to define custom API endpoints.

## Learn More

- [VibeJS Documentation](https://vibejs.com/docs)
- [GitHub Repository](https://github.com/your-org/vibejs)
