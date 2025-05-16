# Feature-Sliced Design Architecture

This project follows the Feature-Sliced Design (FSD) methodology. Here's an overview of each layer:

## Layers (from bottom to top)

### `shared/`

Reusable infrastructure code, basic UI components, and utilities.

- `api/` - API instances, methods
- `lib/` - Utility functions, hooks
- `ui/` - Basic UI components
- `config/` - Project configuration
- `types/` - Common TypeScript types

### `entities/`

Business entities (users, products, etc.)

- Contains business logic and data models
- Each entity has its own slice with models, types, and components

### `features/`

User interactions, processes and features

- Represents specific use cases
- Contains business logic for specific features

### `widgets/`

Compositional components combining entities and features

- Complex components that compose multiple features/entities
- Independent blocks that can be placed on different pages

### `pages/`

Application pages/screens

- Compositions of widgets, features and entities
- Route-specific components and logic

### `app/`

Application initialization logic

- Global providers
- Routing setup
- Store initialization
- Global styles
- Types
- Config
