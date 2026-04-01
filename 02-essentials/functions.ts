
function add(a: number, b: number): number {
  return a + b;
}

// якщо ми не вказуємо явно, що функція нічого не повертає 
// то Typescript  визначає тип автоматично - inferred type
// Inferred type is a type that TypeScript determines automatically 
// based on the assigned value, expression, or context, 
// instead of me declaring it explicitly
function log(message: string) {
  console.log(message);
}

// never означає: функція не завершується успішно взагалі.
// We use never for code paths that cannot produce a value — for example,
// functions that always throw, never finish, or impossible branches after 
// exhaustive type narrowing
function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

const logMsg = (msg: string) => {
  console.log(msg);
};

//we use void when function return nothing
// void означає: функція може завершитися, але не повертає корисного значення.
// For example, we could have a function, perform job,
// which takes a callback function as an argument,
// and this might then do something,
// maybe send an HTTP request, whatever doesn't matter.
// And once it's done, it should call that callback function
// to trigger some other process
// once the main job here is done.
// That's a common pattern in JavaScript
// and actually many programming languages.
// So here, cb, is a parameter which expects to get a function
// as a value because as mentioned in JavaScript
// functions are values.
function performJob(cb: (msg: string) => void) {
  // ...
  cb('Job done!');
}

performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello there!');
    return this.name;
  }
}

user.greet();