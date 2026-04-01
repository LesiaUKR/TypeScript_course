let hobbies = ['Sports', 'Cooking'];

// hobbies.push(10);

// let users: (string | number)[];
let users: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];

// example of tuple
// let possibleResults: [number, number]; // [1, -1]

possibleResults = [1, -1];
// possibleResults = [5, 10, 12];

let user: {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  }
} = {
  name: 'Max',
  age: 38,
  hobbies: ['Sports', 'Cooking'],
  role: {
    description: 'admin',
    id: 5
  }
};

//
let val: {} = 'is a value';

// when we don't know yet exact types of keys and values types for object
// Record is a generic type for objects
// Generic types are recognised by angle brackets
let data: Record<string, number | string>;

data = {
  entry1: 1,
  entry2: 'some string'
};