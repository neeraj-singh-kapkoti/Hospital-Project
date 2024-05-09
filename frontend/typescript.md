## TypeScript
TypeScript is a statically typed superset of JavaScript that provides type safety and other features that can help improve code quality and maintainability. When using TypeScript, you often write code that looks similar to JavaScript, but you also specify types for variables, parameters, and return values.

# Here are some basics to get you started with TypeScript:

## type aliases 
Allow you to create a new name (alias) for a type, which can be particularly useful for creating more descriptive names for complex types. You can use a type alias to represent a union type, an intersection type, or any other type.

# How to Define a Type Alias
To define a type alias in TypeScript, use the type keyword followed by the alias name and the type you want to alias:
```bash
    type AliasName = OriginalType;
```

- Simple Type Alias:
Create an alias for a primitive type or an existing type.
```bash
type MyNumber = number;
let myValue: MyNumber = 42;
```


