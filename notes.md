# Commonly-Used Props

- Basic Primitives.
```typescript
type CounterProps = {
    incident: string;
    count: number;
    enabled: boolean;
}
```

- Arrays or Collections of primitives.
```typescript
type GroceryListProps = {
    items: string[];
}
```

- Only certain strings. => `union type`
```typescript
type GroceryListProps = {
    items: string[];
    status: 'loading' | 'error' | 'success';
}
```

- Objects
```typescript
type ContrivedExampleComponentProps = {
  anObject: object; // Useful as a placeholder.
  anotherObject: {}; // Can have any properties and values.
  item: {
    id: string;
    title: string;
  };
  items: {
    id: string;
    title: string;
  }[]; // An array of objects of a certain shape.
  
};
// refactor
type Item = {
  id: string;
  title: string;
};

type ContrivedExampleComponmentProps = {
  item: Item;
  items: Item[];
};
```

- The key and the value can has to be of a certain type.
```typescript
type ItemHash = {
    [key: string]: Item;
}
type Dictionary = {
    [key: number]: string;
}

Record<string, Item>
Record<number, string>
```

- Function
```typescript
type ContrivedExampleProps = {
    // Does not take any arguments. Does not return anything.
    onHover: () => void;

    // Takes a number. Returns nothing (e.g. undefined).
    onChange: (id: number) => void;

    // Takes an event that is based on clicking on a button. Return nothing.
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

// A standalone function that you type as your declare it, is a little bit different.
const add = (a: number, b: number): number => {
    return a + b;
};

function subtract (a: number, b: number): number {
    return a - b;
}
```

- Optional
```typescript
type ContrivedProps = {
    requiredProp: boolean;
    optionalProp?: string;
}
```


# Typing Children

1. `React.ReactNode`


# Typing Styling

1. `React.CSSProperties`


# Working with Generics

- Basic
```typescript
type Link<T> = {
  value: T;
  next: Link<T>;
};

function identity<T>(arg: T) {
  return arg;
}


function tap<T>(arg: T, fn: (arg: T) => void): T {
  fn(arg);
  return arg;
}
const popped = tap([1, 2, 3], (n) => n.pop());
```

# A Tour of Utility Types in React

1. keyof
```typescript
type ObjectLiteralType = {
  first: 1;
  second: 2;
};

// Inferred Type: "first" | "second"
type Result = keyof ObjectLiteralType;
```

2. Getting The Type Of A Single Key In An Object
```typescript
type Obj = {
  0: "a";
  1: "b";
  prop0: "c";
  prop1: "d";
};

// Inferred Type: "c"
type Result0 = Obj["prop0"];

// Inferred Type: "a" | "b"
type Result1 = Obj[0 | 1];

// Inferred Type: "c" | "d"
type Result2 = Obj["prop0" | "prop1"];
```

3. Unions
```typescript
type A = "a" | "b" | "c";
type B = "b" | "c" | "d";

// Inferred Type: "a" | "b" | "c" | "d"
type Union = A | B;

type ObjectTypeA = {
  firstProp: number;
  sharedProp: string;
};

type ObjectTypeB = {
  secondProp: boolean;
  sharedProp: string;
};

type Union = ObjectTypeA | ObjectTypeB;
```

4. Intersections
```typescript
type A = "a" | "b" | "c";
type B = "b" | "c" | "d";

// Inferred Type: "b" | "c"
type Intersection = A & B;
```

5. Conditionals
```typescript
type Wrap<T> = T extends { length: number } ? [T] : T;

type IsAssignableTo<A, B> = A extends B ? true : false;

// Type `123` is assignable to type `number`
// Inferred Type: true
type Result1 = IsAssignableTo<123, number>;

// Type `number` is not assignable to type `123`
// Inferred Type: false
type Result2 = IsAssignableTo<number, 123>;
```

6. Exclude
```typescript
type Exclude<T, U> = T extends U ? never : T;

// Inferred Type: 1 | 3
type Result0 = Exclude<1 | 2 | 3, 2>;

// Inferred Type: "a" | "b"
type Result1 = Exclude<1 | "a" | 2 | "b", number>;

// Inferred Type: "a" | 2
type Result2 = Exclude<1 | "a" | 2 | "b", 1 | "b" | "c">;
```

7. Extract
```typescript
type Extract<T, U> = T extends U ? T : never;

// Inferred Type: 1 | 2
type Result1 = Extract<1 | "a" | 2 | "b", number>;

// Inferred Type: 1 | "b"
type Result2 = Extract<1 | "a" | 2 | "b", 1 | "b" | "c">;
```

8. Objects
```typescript
type ObjectWithAKey = { a: string };
type ObjectWithStringKeys = { [key: string]: number };

// Inferred Type: { a: number; b: number; c: number; }
type Result = {
  [K in "a" | "b" | "c"]: number;
};

type Mask = {
  [K in keyof ObjectLiteralType]: boolean;
};

// Pick
type ObjectLiteralType = {
  john: 1;
  paul: 2;
  george: 3;
  ringo: 4;
};

// Inferred Type: { george: 2; ringo: 4; }
type Result = Pick<ObjectLiteralType, "george" | "ringo">;

// Omit
type ObjectLiteralType = {
  john: 1;
  paul: 2;
  george: 3;
  ringo: 4;
};

// Inferred Type: { john: 1; paul: 2; }
type Result = Omit<ObjectLiteralType, "george" | "ringo">;
```

9. String Manipulation Utilities
```typescript
type UppercaseWes = Uppercase<"wes">;
type LowercaseWes = Lowercase<"Wes">;
type CapitalizeWes = Capitalize<"wes">;
type UncapitalizeWes = Uncapitalize<"Wes">;

// React.HTMLProps<HTMLXXXElement>
const Input = (props: <Props & React.HTMLProps<HTMLInputElement>) => {
  // …
}

<Input about={...} accept={...} alt={...} ... />

// React.ComponentProps<typeof XXX>
type MyComponentProps = React.ComponentProps<typeof MyComponent>;

```
10. Generic List Component
```typescript
import * as React from "react";

export interface GenericListProps<T> {
  items: T[];
  itemRenderer: (item: T) => JSX.Element;
}

export class GenericList<T> extends React.Component<GenericListProps<T>, {}> {
  render() {
    const { items, itemRenderer } = this.props;

    return <div>{items.map(itemRenderer)}</div>;
  }
}
```
