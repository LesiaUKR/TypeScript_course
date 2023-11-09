// Index Properties
// використовуються, коли є об'єкти з різною кільеістю ключів і значень,
// але тип даних однаковий, що у ключа, що у значення

// робимо однаковий шаблон для різних товарів
type Goods = {
  [key: string]: number;
};

// type Fruits = {
//   apples: number;
//   banana: number;
//   orange: number;
// };

// type FrozenGoods = {
//   iceCream: number;
//   fish: number;
//   berry: number;
// };

const fruits: Goods = {
  apples: 15,
  banana: 30,
  orange: 30,
};

const frozenGoods: Goods = {
  iceCream: 25,
  fish: 30,
  berry: 10,
};

/******** PRACTICE ********/

type MixedType = {
  [key: string]: string | number;
};

const userInfo: MixedType = {
  name: "Bob",
  age: 23,
  country: "Ukraine",
};

const bookInfo: MixedType = {
  title: "Bible",
  pageCount: 350,
};
