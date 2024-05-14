## TypeScript
TypeScript is a statically typed superset of JavaScript that provides type safety and other features that can help improve code quality and maintainability. When using TypeScript, you often write code that looks similar to JavaScript, but you also specify types for variables, parameters, and return values.

# Here are some basics to get you started with TypeScript:

## Type Annotations:
Variables can be annotated with types using a colon (:) followed by the type.
```bash
let count: number = 10;
let name: string = "John";
```
## Type inference
In TypeScript, type inference refers to the compiler's ability to automatically determine the types of variables and expressions based on their usage. This feature allows you to write code without explicitly specifying types in many cases, while still benefiting from static type checking.

Let's discuss how type inference works for number and boolean types in TypeScript:
```bash
let x = 42; // TypeScript infers that 'x' is of type 'number'
let isTrue = true; // TypeScript infers that 'isTrue' is of type 'boolean'
let result = 5 + 10; // TypeScript infers that 'result' is of type 'number'
```
## Any type
In TypeScript, the any type is a special type that acts as a wildcard for type compatibility. When you declare a variable or function parameter with the any type, TypeScript effectively turns off type checking for that variable. This means that any value can be assigned to a variable of type any, and any operations can be performed on it without any compile-time errors.

Here's an example of how the any type works in practice:
```bash
let myVariable: any = 42; // myVariable is assigned the number 42
myVariable = "Hello"; // myVariable is now a string
myVariable = true; // myVariable can be reassigned to a boolean
```

## Function
- Function with Return Type:
```bash
    function add(x: number, y: number): number {
        return x + y;
    }
```

- Rest Parameters:
```bash
    function sum(...numbers: number[]): number {
        return numbers.reduce((total, num) => total + num, 0);
    }
```

## void vs never type

In TypeScript, both void and never represent the absence of a value, but they have different use cases and implications.

Use Case: 
- void is used as the return type of functions that do not return a value or explicitly return undefined.
- never is used as the return type of functions that never complete normally, i.e., functions that always throw an error, enter infinite loops, or have unreachable code.

  
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

## Arrays 
can be typed to contain specific types of elements. This means you can create arrays that are strongly typed, ensuring that the elements in the array match the expected type. TypeScript provides a few ways to define the type of an array:

- Type Annotations:
You can specify the type of elements in an array using square brackets ([]) after the element type.
```bash
let numbers: number[] = [1, 2, 3, 4];
let strings: string[] = ["a", "b", "c"];
```
- Generic Array Type:
Another way to define an array's type is to use the generic syntax Array<type>.
```bash
let numbers: Array<number> = [5, 10, 15];
let strings: Array<string> = ["x", "y", "z"];
```
- Array of Objects:
You can specify an array type that contains objects with specific properties and types.
```bash
interface Person {
    name: string;
    age: number;
}

let people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];
```

### Union Types
A union type allows a variable to hold one of several types. It is represented using the | operator between types.

Example:
```bash
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "Hello"; // Allowed because "Hello" is a string
value = 42; // Allowed because 42 is a number
```
You can use union types to handle different types of data within a single variable or function parameter.

### Tuple Types
Tuple types allow you to specify an array with a fixed length and known element types at each index. This is useful for defining arrays where each element has a specific purpose and type.
```bash
Example:
let point: [number, number] = [10, 20]; // A tuple with two numbers

// Accessing tuple elements by index
let x = point[0]; // x is 10
let y = point[1]; // y is 20

// You can modify the elements of a tuple
point[0] = 15; // x is now 15
```
You can also use tuples in function parameters and return types:

### Function Parameter Example:
```bash
function printCoordinates(coords: [number, number]): void {
    console.log(`X: ${coords[0]}, Y: ${coords[1]}`);
}

printCoordinates([10, 20]); // Output: X: 10, Y: 20
```

### Enums
Enums in TypeScript allow you to define a set of named constants. Enums can be numeric or string-based.

Numeric Enum Example:
```bash
enum Direction {
    North,
    South,
    East,
    West,
}

let dir: Direction = Direction.North; // dir is 0, since Direction.North is the first entry

switch (dir) {
    case Direction.North:
        console.log("Heading North");
        break;
    case Direction.South:
        console.log("Heading South");
        break;
    case Direction.East:
        console.log("Heading East");
        break;
    case Direction.West:
        console.log("Heading West");
        break;
}
```
## Type Assertion

In TypeScript, type assertion is a mechanism which tells the compiler about the type of a variable. When TypeScript determines that the assignment is invalid, then we have an option to override the type using a type assertion. If we use a type assertion, the assignment is always valid, so we need to be sure that we are right. Otherwise, our program may not work correctly.

### TypeScript provides two ways to do Type Assertion. They are

- Using Angular Bracket <>
- Using as keyword
  
```bash
let code: any = 111;   
let employeeCode = <number> code;   
let employeeCode = code as number;
```
## Generics

TypeScript generics provide a way to create reusable components and functions that work with a variety of data types while maintaining type safety. Generics allow you to define placeholders for types that are specified by the caller when using the component or function.

### Syntax:
The syntax for defining generics in TypeScript involves using angle brackets (<>) to enclose a type parameter, which acts as a placeholder for a specific type. Here's a basic syntax example:

```bash
function identity<T>(arg: T): T {
    return arg;
}
In this example:

<T> declares a generic type parameter T.
arg: T specifies that the parameter arg should be of type T.
T is used as the return type as well.
```
