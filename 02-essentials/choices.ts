// enum Role {
//   Admin, // 0
//   Editor, // 1
//   Guest, // 2
// }

// enum is a type which allows certain set of options from predefined list

// type MyNumber = number;

// custom type alias to deal with custom union type
// it is alternative to let userRole: 'admin' | 'editor' | 'guest' | 'reader' = 'admin';
type Role = 'admin' | 'editor' | 'guest' | 'reader';
// custom object type for user
type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};

// first 'admin' is type, second - value
// let userRole: 'admin' = 'admin';

// let userRole: Role = 0; //
let userRole: Role = 'admin';

// ...

userRole = 'guest';

// example of the literal types - when you set specific values for types
let possibleResults: [1 | -1, 1 | -1]; // [1, -1]

possibleResults = [1, -1];

function access(role: Role) {
  // ...
}