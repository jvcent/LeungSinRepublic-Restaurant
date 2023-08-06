// Folder to hold all the portofolio content. Changing these will take effect everywhere else

const navLinks = [
  {
    id: "home",
    title: "HOME",
  },
  {
    id: "menu",
    title: "MENU",
  },
  {
    id: "order",
    title: "ORDER NOW",
  },
];

const menu = [
  {
    ch: "魚肉燒賣",
    eng: "Fish Siew Mai",
    price: "$7.69",
    img: "/siew mai.png",
  },
  {
    ch: "餐蛋麵",
    eng: "Ichicho with Spam & Egg",
    price: "$14.99",
    img: "/ichicho spam egg.jpg",
  },
  {
    ch: "正宗碗仔翅",
    eng: "Shark Fin Soup",
    price: "$14.99",
    img: "/shark fin.jpg",
  },
  {
    ch: "香脆蔥油餅",
    eng: "Onion & Scallion Pancake",
    price: "$9.99",
    img: "/pancake.png",
  },
  {
    ch: "超正麻辣燙",
    eng: "Original Series",
    price: "$1.99 ",
    img: "/original malatang.png",
  },
  {
    ch: "惹味麻辣拌",
    eng: "Hot & Numbing",
    price: "$1.99 ",
    img: "/spicy malatang.png",
  },
  {
    ch: "珍鮮菌菇湯",
    eng: "Mushroom",
    price: "$1.99 ",
    img: "/mushroom malatang.png",
  },
  {
    ch: "鮮甜番茄湯",
    eng: "Tomato",
    price: "$2.99 ",
    img: "/tomato malatang.png",
  },
  {
    ch: "臭臭螺絲粉",
    eng: "Liuzhou Snail Noodles",
    price: "$16.99 ",
    img: "/snail noodles.png",
  },
  {
    ch: "番茄濃湯牛肉米線",
    eng: "Rice Noodles",
    price: "$18.99 ",
    img: "/beef brisket noodles.png",
  },
  {
    ch: "農心辛拉麵",
    eng: "Shin Ramen",
    price: "$10.99 ",
    img: "/shin ramen.jpg",
  },
  {
    ch: "豬肉片菜湯米粉套餐",
    eng: "Pork Vermicelli",
    price: "$16.99 ",
    img: "/pork vermicelli.png",
  },
];

const popular = [
  {
    ch: "魚肉燒賣",
    eng: "Fish Siew Mai",
    price: "$7.69",
    img: "/siew mai.png",
  },
  {
    ch: "餐蛋麵",
    eng: "Ichicho with Spam & Egg",
    price: "$14.99",
    img: "/ichicho spam egg.jpg",
  },
  {
    ch: "正宗碗仔翅",
    eng: "Shark Fin Soup",
    price: "$14.99",
    img: "/shark fin.jpg",
  },
  {
    ch: "香脆蔥油餅",
    eng: "Onion & Scallion Pancake",
    price: "$9.99",
    img: "/pancake.png",
  },
  {
    ch: "超正麻辣燙",
    eng: "Original Series",
    price: "$1.99 ",
    img: "/original malatang.png",
  },
  {
    ch: "惹味麻辣拌",
    eng: "Hot & Numbing",
    price: "$1.99 ",
    img: "/spicy malatang.png",
  },
  {
    ch: "珍鮮菌菇湯",
    eng: "Mushroom",
    price: "$1.99 ",
    img: "/mushroom malatang.png",
  },
  {
    ch: "鮮甜番茄湯",
    eng: "Tomato",
    price: "$2.99 ",
    img: "/tomato malatang.png",
  },
];

const malatang = [
  {
    ch: "超正麻辣燙",
    eng: "Original Series",
    price: "$1.99 ",
    img: "/original malatang.png",
  },
  {
    ch: "惹味麻辣拌",
    eng: "Hot & Numbing",
    price: "$1.99 ",
    img: "/spicy malatang.png",
  },
  {
    ch: "珍鮮菌菇湯",
    eng: "Mushroom",
    price: "$1.99 ",
    img: "/mushroom malatang.png",
  },
  {
    ch: "鮮甜番茄湯",
    eng: "Tomato",
    price: "$2.99 ",
    img: "/tomato malatang.png",
  },
];

const breakfast = [
  {
    ch: "油炸鬼",
    eng: "Chinese Donuts",
    price: "$5.99 ",
    img: "/char kway.png",
  },
  {
    ch: "良善蒸靚餃",
    eng: "Steamed Dumplings ",
    price: "$6.99 ",
    img: "/dumplings.png",
  },
  {
    ch: "經典7仔撈麵",
    eng: "Garlic Noodles",
    price: "$16.99 ",
    img: "/garlic noodles.png",
  },
  {
    ch: "新鮮蒸饅頭",
    eng: "Steamed Buns",
    price: "$4.99 ",
    img: "/steamed buns.jpg",
  },
  {
    ch: "臭臭螺絲粉",
    eng: "Liuzhou Snail Noodles",
    price: "$16.99 ",
    img: "/snail noodles.png",
  },
  {
    ch: "番茄濃湯牛肉米線",
    eng: "Rice Noodles",
    price: "$18.99 ",
    img: "/beef brisket noodles.png",
  },
  {
    ch: "農心辛拉麵",
    eng: "Shin Ramen",
    price: "$10.99 ",
    img: "/shin ramen.jpg",
  },
  {
    ch: "豬肉片菜湯米粉套餐",
    eng: "Pork Vermicelli",
    price: "$16.99 ",
    img: "/pork vermicelli.png",
  },
];

const noodles = [
  {
    ch: "臭臭螺絲粉",
    eng: "Liuzhou Snail Noodles",
    price: "$16.99 ",
    img: "/snail noodles.png",
  },
  {
    ch: "番茄濃湯牛肉米線",
    eng: "Rice Noodles",
    price: "$18.99 ",
    img: "/beef brisket noodles.png",
  },
  {
    ch: "農心辛拉麵",
    eng: "Shin Ramen",
    price: "$10.99 ",
    img: "/shin ramen.jpg",
  },
  {
    ch: "豬肉片菜湯米粉套餐",
    eng: "Pork Vermicelli",
    price: "$16.99 ",
    img: "/pork vermicelli.png",
  },
];

const drinks = [
  {
    ch: "自家製檸檬茶",
    eng: "Lemon Tea",
    price: "$4.20 ",
    img: "/lemon tea.png",
  },
  {
    ch: "肥宅快樂水",
    eng: "Coke, Sprite, Ginger Ale ",
    price: "$2.99 ",
    img: "/soft drinks.png",
  },
  {
    ch: "奶茶",
    eng: "Milk Tea",
    price: "$2.99 ",
    img: "/milk tea.png",
  },
  {
    ch: "蜂蜜柚子茶",
    eng: "Honey Citron Tea",
    price: "$2.99 ",
    img: "/honey citron tea.png",
  },
];

export { navLinks, menu, popular, malatang, breakfast, noodles, drinks };
