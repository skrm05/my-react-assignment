# Task 1: React Setup with Vite

## Why Vite over Create React App (CRA)?

Vite is preferred over CRA for several reasons:

1. **Speed**: Vite uses native ES modules for extremely fast cold server starts, whereas CRA bundles the entire application before starting.
2. **Hot Module Replacement (HMR)**: Vite's HMR is incredibly fast regardless of app size, making the developer experience much smoother.
3. **Modern Build**: Vite uses Rollup for production builds, which is highly optimized and produces smaller bundle sizes.

## Dependencies Listed

- **react**: The core React library for building user interfaces.
- **react-dom**: Provides DOM-specific methods to render React components to the web.
- **vite**: The build tool and development server.
- **@vitejs/plugin-react**: Provides Fast Refresh and automatic JSX runtime.
