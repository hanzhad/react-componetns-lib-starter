## React Components Library Starter

Welcome to the React Components Library Starter kit! This toolkit provides you with a solid foundation for building your own React components library.

You can find an example package [here](https://www.npmjs.com/package/react-componetns-lib-starter).

### Folder Structure and Examples

Explore the `./src/components/` directory to understand how to use and organize your components effectively.

#### `./src/index.ts`

This file serves as the entry point for your library and should export all your components from the `./src/components` folder.

```typescript
export * from './components';
```

#### Example of `./src/components/index.ts` 

Here's an example of how you can organize your components in the `index.ts` file within the `components` directory:

```typescript
export { default as App } from "./App"
export { default as Counter } from "./Counter"
export { default as Form } from "./Form"
```

### Build Script

The build script focuses on the following folders:

- `src`
- `src/declarations/*`

Additionally, it covers images to ensure comprehensive building.

### Getting Started

To start using this starter kit, follow these steps:

1. **Login**:
   - **Yarn**:
     ```bash
     yarn login
     ```
   - **npm**:
     ```bash
     npm login
     ```
   - **pnpm**:
     ```bash
     pnpm login
     ```

2. **Change Version**:
   Update the version of your library in the `package.json` file. Also, don't forget to change the author and description of the package. For example:

   ```json
   {
     "name": "your-package-name",
     "version": "1.0.0",
     "author": "Your Name",
     "description": "Your package description",
     ...
   }
   ```

3. **Build Your Library**:
   - **Yarn**:
     ```bash
     yarn build:npm
     ```
   - **npm**:
     ```bash
     npm run build:npm
     ```
   - **pnpm**:
     ```bash
     pnpm build:npm
     ```

4. **Publish**:
   - **Yarn**:
     ```bash
     yarn publish
     ```
   - **npm**:
     ```bash
     npm publish
     ```
   - **pnpm**:
     ```bash
     pnpm publish
     ```

### Usage Example

```jsx
import React from 'react';
import { App as LibApp, Form, Counter } from "react-componetns-lib-starter"

function App() {
  return (
    <div >
      <LibApp/>
      <Form handleSubmitForm={(data) => console.log('data', data)}/>
      <Counter min={100} max={1000} step={100} />
    </div>
  );
}

export default App;
```

#### Here's an example of how users will see the build code after using the provided React components:

```ts
declare function App(): react_jsx_runtime.JSX.Element;

interface CounterProps {
    min: number;
    max: number;
    step: number;
}
declare const Counter: React.FC<CounterProps>;

interface FormData {
    name: string;
    email: string;
    message: string;
}
interface FormProps {
    handleSubmitForm: (formData: FormData) => void;
}
declare const Form: React.FC<FormProps>;

export { App, Counter, Form };
```

Congratulations! You've successfully built and published your React components library.

Feel free to customize and expand upon this starter kit to meet your specific requirements. Happy coding!