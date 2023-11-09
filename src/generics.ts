/******** Generics ********/

// 1. Створюють загальні функції, класи, що можуть працювати з різними вхідними типами і збрерігати типізацію
// <T> - це процес створення Generics, скорочено від T від type, але це не зарезервоване слово чи літера, тобто може бути інше позначення,
// цим ми говоримо TypeScript опрацювати тип даних для параметрів, які прилітають у функцію
// по суті <T> - це динамічна змінна типізпції, куди ми передаємо параметри для перевірки типу даних
// Generics дає змогу створювати функцію, яка дає змогу визначати з яким типом даних вона працює під
// час запуску функції

// function identity<T>(arg: T): T {
//   return arg;
// }

//1 як веде себе TypeScript перший раз при виклику функції let output1 = identity<string>("myString")  з викор-ням Generics
// замість T підставляється тип string
// function identity<string>(arg: string): string {
//   return arg;
// }

// 2 як веде себе TypeScript перший раз при виклику функції let output2 = identity<number>(100); з викор-ням Generics
// замість T підставляється тип number

// function identity<number>(arg: number): number {
//   return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

/******** PRACTICE ********/

/**** Task1 ****/

// Створіть загальну функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.
// (items: K[]): K[]  - перша K[] - для типізації масиву, який буде передаватися в параметри, друга : K[] - типізація  return

// function reverse<K>(items: K[]): K[] {
//   return items.reverse();
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// console.log(numbers); // [5, 4, 3, 2, 1]

// let strings = reverse<string>(["a", "b", "c", "d"]);
// console.log(strings); // ["d", "c", "b", "a"]

// let i const - звертаємся по назві змінної
// <> - звертаємося по назві дженерика

/******** GENERICS METHODS ********/

/**** extends ****/

// extends <T extends { duration: number }> - де ми очікуємо тип даних T, який має обов'язково містити чатинку об'єкту з ключем
// duration з типом даних number
// тобтом таким чином ми валідуємо наш Generic
// можна сказати, що extends це вбудований if для валідації Generic

// function lengthOfObject<T extends { duration: number }>(obj: T): number {
//   return obj.duration;
// }

// lengthOfObject({ name: "Earth", duration: 10 }); // 10

// type obj = {
//   name: string;
//   length: number;
//   duration: number;
// };

/**** key of ****/

// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта.

// const student = {
//   name: "John",
//   age: 25,
//   groupNumber: 12,
// };

// type Student = {
//   name: string;
//   age: number;
// };

// K extends keyof T - цей запис означає, що перевір, що K є ключом типу T
// Можна замінити літери повною назвою <ObjectType, KeyType extends keyof ObjectType>(obj: ObjectType, key: KeyType): ObjectType[KeyType]

// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }

// let studentName = getProperty(student, "name");
// console.log(studentName); // "John"

// let studentAddress = getProperty(student, "address");
// console.log(studentAddress); // undefined

/**** patrial <T> ****/

// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };

// fieldsToUpdate: Partial<Todo> - коли хочемо передати не весь об'єкт, а лише
// частинку, яку хочемо обновити. Тобто таким записом ми говоримо, що передається
// лише частина, а не весь об'єкт

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1: Todo = {
//   title: "Learn TypeScript",
//   description: "Study the basics of TypeScript",
//   completed: false,
// };

// const todo2 = updateTodo(todo1, {
//   description: "Study generics in TypeScript",
// });

// console.log(todo2);

/**** ReadOnly / ReadonlyArray ****/

// коли хочемо захистити об'єкт від перезапису ReadOnly
// коли хочемо захистити масив від перезапису ReadonlyArray

type User = {
  name: string;
  age: number;
  // updateAge: function (param:number): void{}
};

const john: Readonly<User> = {
  name: "John",
  age: 30,
  // updateAge(age: number): void {
  //    this.age = age;
  // },
};

// john.age = 31; // помилка: неможливо змінити age, тому що воно є лише для читання
// john.updateAge[10]; //через метод онвлюється age
console.log(john);

// john.age = 31; // Помилка: Неможливо змінити 'age', тому що воно є лише для читання.

// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers.push(6); // Помилка: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 0; // Помилка: Index signature in type 'readonly number[]' only permits reading.

/****  Pick<T, K> ****/

type Person = {
  name: string;
  age: number;
  address: string;
};

// за допомогою методу Pick створили новий тип, який буде такий само як
// Person, але тільки з полями name та age
type PersonSummary = Pick<Person, "name" | "age">;

//тобто під капотом TypeScript створить такий тип:
// type PersonSummary = {
//   name: string;
//   age: number;
// };
// якщо створювати новий тип через метод Pick, то тип Person і PersonSummary будуть пов'язані

/****  Omit<T, K> ****/

// Omit на відміну від Pick не витягує потрібні ключі, а видаляє непотрібні

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonWithoutAddress = Omit<Person, "address">;

// const john: PersonWithoutAddress = {
//   name: "John",
//   age: 30,
// address: "123 Main St" // Ця властивість тут не допустима
// };

/**** Record<K, T> ****/
//якщо потрібно зробити захаркоджені дані, типу словник, довідник
// які ніколи не будуть змінюватись
// наприклад - календарик, для локалізації
// можна створювати або через  enum або через Record

// type CityDatabase = Record<string, number>;

// const database: CityDatabase = {
//   Kyiv: 2884000,
//   Kharkiv: 1441000,
//   Odesa: 1015000,
// };

// Додаємо новий запис в базу даних, де ключ (ім'я міста) має тип string, а значення (населення) має тип number
// database.Lviv = 721301;

/******** TASKS FOR PRACTICE ********/

// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.
// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.
// Задача 2: Мапа з іменами місяців до кількості днів у них.

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.
//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню.
// Він повинен містити поля: назва, ціна, категорія(наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(), де студент представляється.
