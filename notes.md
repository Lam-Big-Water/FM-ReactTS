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


# useState
