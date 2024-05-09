## TypeScript
TypeScript is a statically typed superset of JavaScript that provides type safety and other features that can help improve code quality and maintainability. When using TypeScript, you often write code that looks similar to JavaScript, but you also specify types for variables, parameters, and return values.

# Here are some basics to get you started with TypeScript:

## Type aliases 
Allow you to create a new name (alias) for a type, which can be particularly useful for creating more descriptive names for complex types. You can use a type alias to represent a union type, an intersection type, or any other type.

### How to Define a Type Alias
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
- Union Type Alias:
 Create an alias for a union type, allowing a variable to hold one of several types.
```bash
type StringOrNumber = string | number;
let value: StringOrNumber;

value = "Hello"; // value is a string
value = 10; // value is now a number
```
- Complex Type Alias:
  Create an alias for a complex type such as an object with nested properties or a function type.
```bash
type Point = {
    x: number;
    y: number;
};

type AddFunction = (a: number, b: number) => number;

const point: Point = {
    x: 10,
    y: 20
};

const add: AddFunction = (a, b) => a + b;
```

## readonly and optional (denoted by the ? symbol)
are modifiers that you can use to define properties in objects and interfaces with specific behaviors.

### readonly Modifier
The readonly modifier makes a property immutable, meaning that once it is assigned a value, it cannot be changed. This can be useful for defining constant properties in objects and interfaces.

Here's an example of how to use the readonly modifier:

```bash
interface Point {
    readonly x: number;
    readonly y: number;
}

const point: Point = {
    x: 10,
    y: 20
};

console.log(point.x); // Output: 10
// Trying to change the value of `x` or `y` will result in a compile-time error
// point.x = 15; // Error: Cannot assign to 'x' because it is a read-only property
```
In the above example, the Point interface defines two properties, x and y, both of which are marked as readonly. As a result, once you create an object of type Point and assign values to x and y, you cannot change them.

### optional Modifier (?)
In TypeScript, the optional modifier (?) is used to define properties that are not required to be present in an object. This can be helpful when working with objects that may or may not have certain properties.

Here's an example of how to use the optional modifier:

```bash
interface User {
    id: number;
    name: string;
    age?: number; // age is an optional property
}

const user1: User = {
    id: 1,
    name: "Alice"
    // age is not provided, which is fine because it is optional
};

const user2: User = {
    id: 2,
    name: "Bob",
    age: 30 // age is provided, which is also fine
};
```
