// import { concatenation } from "./concatenation";

// const input = document.querySelector("input");
// const button = document.querySelector("button");

// if (button && input) {
//   button.addEventListener("click", () => {
//     concatenation(input.value, "hello!");
//   });
// }

/**** Basic Types - obvious typing ****/

// let total: number = 100;
// let name: string = "Bob";
// let isActive: boolean = false;
// let empty: null = null;
// let undef: undefined = undefined;

// name = "5";

/********* Basic Types - not obvious typing ********/

// let age = 10;
// age = 12;

/********* Complex types *********/

/**** Arrays ****/

// const numbers: number[] = [1, 2, 3, 4, 5, 6];
// numbers.push(12);

/**** Objects ****/

// const user: { name: string; age: number } = {
//   name: "Bob",
//   age: 12,
// };

/********** Custom Types *********/

// type User = {
//   name: string;
//   age: number;
// };

// const user: User = {
//   name: "Bob",
//   age: 12,
// };

// якщо додати поле, яке не прописано в типізації,
// то буде помилка
// якщо не додати поле, яке було вказано в об'єкті

// user.age = "15" //will be mistake because for age type should be number

// user.name = "Max";

// type eventType = "lesson" | "deadline";
// const evt: eventType = "lesson";

// type size = "small" | "medium" | "large";

/***** type any ****/

// краще не використовувати, бо це дає змогу оминути перевірку типів

// let age: any = 10;
// age = "Bob";
// age = false;

/***** type unknown ****/

// не знає з яким типом даних працює, тому не дає змоги використовувати
// методи для специфічних типів даних (наприклад, toFixed() працює лише з
// типом даних число )

// let name: unknown = "Bob";
// name = 12;
// name.toFixed();

/********** Enum *********/
// набір констант

// enum Sizes {
//   small = "small",
//   medium = "medium",
//   large = "large",
// }

//якщо прописано через кастомний тип type size = "small" | "medium" | "large";
// const button: size = "large";

//якщо прописано через enum
// через enum менше помилок, бо звертаємось до властивості об'єкту через крапку
// const button2: Sizes = Sizes.large;

/********** functions *********/

// типізуємо аргументи num1: number, num2: number та що функція повертає
// в даному випадку повертає рядок : string
// якщо нічого не повертає вказуємо void - (num1: number, num2: number): void

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }

// console.log(add(2, 3));

// якщо у функцію передаємо об'єкт, то прописуємо типи для об'єкту

// type User = {
//   name: string;
// };

// function greating(user: User): void {
//   console.log(`Hello ${user.name}`);
// }

/***** типізуємо return ****/

// type User = {
//   name: string;
//   age: number;
//   hobby: string;
// };

// function userConstructor(name: string, age: number, hobby: string): User {
//   return {
//     name,
//     age,
//     hobby,
//   };
// }

/***** типізуємо об'єкт з методом ****/

type Car = {
  color: string;
  price: number;
  currency: string;
  start: (color: string) => {};
};

const Car = {
  color: "red",
  price: 1000,
  currency: "UAH",
  start() {
    console.log("Start" + this.color);
  },
};

/***** optional params in type ****/

type User = {
  name: string;
  age: number;
  role?: string;
};

const user: User = {
  name: "Bob",
  age: 12,
};
const admin: User = {
  name: "John",
  age: 23,
  role: "Admin",
};
