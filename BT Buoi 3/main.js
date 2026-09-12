// Bài 1:
// cho mảng a và b
//   const a = ["A", "B", "C"]; .
//   const b = [1, 2, 3];
//   từ mảng a và b tạo ra mảng c có dạng như sau:
//       let c = [
//         { value: "A1", id: 1 },
//         { value: "B2", id: 2 },
//         { value: "C3", id: 3 },
//       ];

const a = ["A", "B", "C"];
const b = [1, 2, 3];

// Cách 1

// const c = a.map((element, index) => {
//   return {
//     value: `${element}${b[index]}`,
//     id: b[index],
//   };
// });

// console.log(c);

// Cách 2

// let c = [];

// for (let i = 0; i < a.length; i++) {
//   c.push({
//     value: a[i] + b[i],
//     id: b[i],
//   });
// }

// console.log(c);

// Cách 3

// let c = [];

// a.forEach((element, index) => {
//   c.push({
//     value: element + b[index],
//     id: b[index],
//   });
// });

// console.log(c);

// Cách 4

// const c = a.reduce((accumulator, currentValue, currentIndex) => {
//   accumulator.push({
//     value: currentValue + b[currentIndex],
//     id: b[currentIndex],
//   });

//   return accumulator;
// }, []);

// console.log(c);

//  Bài 2: cho mảng users sau
//   const users = [
//   {
//     id: 1,
//     name: "A",
//     gender: "nam",
//   },
//   {
//     id: 2,
//     name: "B",
//     gender: "nữ",
//   },
//   {
//     id: 3,
//     name: "C",
//     gender: "nam",
//   },
//   {
//     id: 4,
//     name: "D",
//     gender: "nam",
//   },
// ];

// hãy tạo ra mảng mới newUsers
//    const newUsers = [
//       {human:"A1",gender:"nam"},
//       {human:"C3",gender:"nam"},
//       {human:"D4",gender:"nam"}
//    ]

const users = [
  {
    id: 1,
    name: "A",
    gender: "nam",
  },
  {
    id: 2,
    name: "B",
    gender: "nữ",
  },
  {
    id: 3,
    name: "C",
    gender: "nam",
  },
  {
    id: 4,
    name: "D",
    gender: "nam",
  },
];

// Cách 1

// const newUsers = users
//   .filter((user) => user.gender === "nam")
//   .map((user) => ({ human: user.name + user.id, gender: user.gender }));

// console.log(newUsers);

// Cách 2

// const newUsers = users.reduce((accumulator, currentValue) => {
//   currentValue.gender === "nam"
//     ? accumulator.push({
//         human: currentValue.name + currentValue.id,
//         gender: currentValue.gender,
//       })
//     : "";

//   return accumulator;
// }, []);

// console.log(newUsers);

// Cách 3

// const newUsers = [];

// for (const user of users) {
//   user.gender === "nam"
//     ? newUsers.push({
//         human: user.name + user.id,
//         gender: user.gender,
//       })
//     : "";
// }

// console.log(newUsers);

// Cách 4

// const newUsers = [];

// users.forEach((user) => {
//   user.gender === "nam"
//     ? newUsers.push({
//         human: user.name + user.id,
//         gender: user.gender,
//       })
//     : "";
// });

// console.log(newUsers);

// Cách 5

// const newUsers = [];

// for (let i = 0; i < users.length; i++) {
//   users[i].gender === "nam"
//     ? newUsers.push({
//         human: users[i].name + users[i].id,
//         gender: users[i].gender,
//       })
//     : "";
// }

// console.log(newUsers);

//   Bài 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
//         a: tính trung bình cộng số âm
//         b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
//         c: tìm số âm lớn nhất trong mảng

const number = [2, -5, 6, -7, -4, 7, -1, -1];

const checkNegativeNum = (arr) => arr.filter((num) => num < 0);

const avgNegativeNum = (arr) => {
  const negativeNums = checkNegativeNum(arr);

  if (!negativeNums.length) return 0;

  const totalNegative = negativeNums.reduce((accu, value) => accu + value, 0);

  return totalNegative / negativeNums.length;
};

console.log(`Trung bình cộng số âm: ${avgNegativeNum(number)}`);

const printNegativeNumsGreaterThanAvg = (arr) => {
  const negativeNums = checkNegativeNum(arr);

  if (!negativeNums.length) return 0;

  negativeNums.forEach((num) => {
    if (num > avgNegativeNum(arr)) console.log(num);
  });
};

console.log(`Danh sách số âm lớn hơn ${avgNegativeNum(number)}`);

printNegativeNumsGreaterThanAvg(number);

const findMaxNegative = (arr) => {
  const negativeNums = checkNegativeNum(arr);

  if (!negativeNums.length) return 0;

  let max = negativeNums[0];

  negativeNums.forEach((nums) => (max = Math.max(max, nums)));
  return max;
};

console.log(findMaxNegative(number));

// Bài 4: Loại bỏ các phần tử trùng lặp trong mảng let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3]

let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3];

// Cách 1

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     if (numbers[i] === numbers[j]) {
//       numbers.splice(j, 1);
//       j--;
//     }
//   }
// }

// console.log(numbers);

// Cách 2

// let newNumbers = [];

// for (const num of numbers) {
//   if (!newNumbers.includes(num)) newNumbers.push(num);
// }

// console.log(newNumbers);

// Cách 3

const newNumbers = numbers.filter(
  (num, index) => numbers.indexOf(num) === index,
);

console.log(newNumbers);

/**
 * Bài 5: Viết 1 hàm nhận vào 1 mảng và 1 số nguyên dương n
 * sau đó trả về mảng mới chứa các mảng con có kích thước n.
 * let mangSo = [1,2,3,4,5,6,7,8,9]
 * kích thước n = 3
 * viết 1 hàm tachMangCao(mangSo,3)
 * kết quả: [[1,2,3],[4,5,6],[7,8,9]]
 */

let mangSo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tachMangCon = (arr, n) => {
  let result = [];

  for (let i = 0; i < arr.length; i += n) {
    let subArr = arr.slice(i, i + n);
    result.push(subArr);
  }

  return result;
};

console.log(tachMangCon(mangSo, 3));

/**
 * Bài 6: đếm số lượng phần tử trong mảng
 * const lang = ["php","js","c++","java","php","js","php"]
 * output
 *  {
 *    php:3,
 *    js:2,
 *    java:1,
 *    c++:1
 *  }
 */

// const lang = ["php", "js", "c++", "java", "php", "js", "php"];

// const result = lang.reduce((accu, value) => {
//   accu[value] = (accu[value] || 0) + 1;
//   return accu;
// }, {});

// console.log(result);

/**
 *  Bài 7: Lấy tên từ danh sách user
 * [
    {name: "An", age: 20},
    {name: "Bình", age: 25}
   ]
    → ["An", "Bình"]
 */

const user = [
  {
    name: "An",
    age: 20,
  },
  {
    name: "Bình",
    age: 25,
  },
];

// Cách 1

// const userName = user.map((element) => element.name);
// console.log(userName);

// Cách 2

// const userName = [];

// for (const element of user) {
//   userName.push(element.name);
// }

// console.log(userName);

// Cách 3

// const userName = [];

// user.forEach((element) => userName.push(element.name));

// console.log(userName);

/**
 *  Bài 8: Tìm số âm đầu tiên
 * [5, 2, -3, -8] -> -3
 */

const negativeNums = [5, 2, -3, -8];

const findFirstNegative = negativeNums.find((nums) => nums < 0);
console.log(findFirstNegative);

/**
 * Bài 9: const orders = [
  { id: 1, user: "An", total: 200 },
  { id: 2, user: "Bình", total: 500 },
  { id: 3, user: "An", total: 400 }
];

- Tính tổng tiền mỗi user
    Kết quả: {
                An: 500,
                Bình: 500
              }

- Tìm user chi nhiều tiền nhất
- Tính tổng toàn bộ orders của user "An"
 */

const orders = [
  { id: 1, user: "An", total: 200 },
  { id: 2, user: "Bình", total: 500 },
  { id: 3, user: "An", total: 400 },
];

const totalUserOder = orders.reduce((accu, value) => {
  accu[value.user] = (accu[value.user] || 0) + value.total;
  return accu;
}, {});

console.log("Tổng tiền mỗi user: ", totalUserOder);

let maxUser = "";
let maxTotal = 0;

for (const user in totalUserOder) {
  if (totalUserOder[user] > maxTotal) {
    maxTotal = totalUserOder[user];
    maxUser = user;
  }
}

console.log(`User chi nhiều tiền nhất: ${maxUser} - ${maxTotal}`);

const totalAn = orders
  .filter((order) => order.user === "An")
  .reduce((accu, value) => accu + value.total, 0);

console.log("Tổng toàn bộ orders của user An:", totalAn);

/**
 * Bài 10: const sales = [
  { user: "An", product: "Áo", price: 100, qty: 2 },
  { user: "Bình", product: "Giày", price: 300, qty: 1 },
  { user: "An", product: "Quần", price: 200, qty: 1 },
  { user: "Chi", product: "Áo", price: 100, qty: 5 }
];
- Lấy danh sách sản phẩm không trùng => ["Áo", "Giày", "Quần"]
- Tính tổng số lượng bán ra của từng sản phẩm
kết quả: 
        {
            Áo: 7,
            Giày: 1,
            Quần: 1
        }
- Lọc các đơn hàng có tổng tiền > 200 -> lấy tên user
 */

const sales = [
  { user: "An", product: "Áo", price: 100, qty: 2 },
  { user: "Bình", product: "Giày", price: 300, qty: 1 },
  { user: "An", product: "Quần", price: 200, qty: 1 },
  { user: "Chi", product: "Áo", price: 100, qty: 5 },
];

const temp = [];

const findShirt = sales
  .map((item) => item.product)
  .find((item) => item === "Áo");

const findShoe = sales
  .map((item) => item.product)
  .find((item) => item === "Giày");

const findJean = sales
  .map((item) => item.product)
  .find((item) => item === "Quần");

temp.push(findShirt, findShoe, findJean);
console.log("Danh sách sản phẩm không trùng: ");

console.log(temp);

const result = {};

for (const element of sales) {
  const name = element.product;
  const qty = element.qty;

  if (result[name]) {
    result[name] += qty;
  } else {
    result[name] = qty;
  }
}

console.log(result);

const userHasTotalOrderGreaterThan200 = sales
  .filter((item) => item.price * item.qty > 200)
  .map((item) => item.user);

console.log(userHasTotalOrderGreaterThan200);

// Bài 11: Tìm sản phẩm đắt nhất
// const products = [
//     { name: "A", price: 100 },
//     { name: "B", price: 300 },
//     { name: "C", price: 200 }
// ];
// Kết quả: { name: "B", price: 300 }

const products = [
  { name: "A", price: 100 },
  { name: "B", price: 300 },
  { name: "C", price: 200 },
];

// Cách 1

// let maxProductPrice = products[0];

// for (const p of products) {
//   if (p.price > maxProductPrice) maxProductPrice;
// }

// console.log(maxProductPrice);

// Cách 2

const maxProductPrice = products.reduce((accu, value) => {
  return value.price > accu.price ? value : accu;
});

console.log(maxProductPrice);

// Bài 12: Đếm số user đang hoạt động;
// const users = [
//     { name: "A", active: true },
//     { name: "B", active: false },
//     { name: "C", active: true }
// ];

const usersInfo = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
];

const isUserActive = usersInfo.filter((user) => user.active);

console.log(`Số user đang hoạt động: ${isUserActive.length}`);

// Bài 13: Tìm sản phẩm bán chạy nhất
// const orders = [
//     "iphone",
//     "iphone",
//     "samsung",
//     "iphone",
//     "xiaomi",
//     "xiaomi"
// ];

const orders2 = ["iphone", "iphone", "samsung", "iphone", "xiaomi", "xiaomi"];

const findBestSeller = (orders) => {
  const counts = {};
  for (const product of orders) {
    counts[product] = (counts[product] || 0) + 1;
  }

  let bestSeller = "";
  let maxCount = 0;

  for (const product in counts) {
    if (counts[product] > maxCount) {
      maxCount = counts[product];
      bestSeller = product;
    }
  }

  return { product: bestSeller, count: maxCount };
};

const result2 = findBestSeller(orders2);
console.log(
  `Sản phẩm bán chạy nhất là: ${result2.product} (${result2.count} đơn hàng)`,
);

// Bài 14: Tìm số xuất hiện nhiều nhất
// [1, 1, 2, 2, 2, 3] -> 2

const arr = [1, 1, 2, 2, 2, 3];

const timSoXuatHienNhieuNhat = (arr) => {
  if (arr.length === 0) return null;

  const count = {};
  let maxNum = arr[0];
  let maxCount = 0;

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) {
      maxCount = count[num];
      maxNum = num;
    }
  }

  return maxNum;
};

console.log(timSoXuatHienNhieuNhat(arr));

// Bài 15: Tìm đơn hàng có giá trị cao nhất

// const orders = [
//     { id: 1, total: 500 },
//     { id: 2, total: 1200 },
//     { id: 3, total: 800 }
// ];
// Kết quả: { id: 2, total: 1200 }

const orders3 = [
  { id: 1, total: 500 },
  { id: 2, total: 1200 },
  { id: 3, total: 800 },
];

let maxOrder = orders3[0];

for (const o of orders3) {
  if (o.total > maxOrder.total) maxOrder = o;
}

console.log(maxOrder);

// Bài 16: Đếm số đơn hàng theo trạng thái
// const orders = [
//     { status: "pending" },
//     { status: "completed" },
//     { status: "pending" },
//     { status: "cancelled" }
// ];
// kết quả: {
//     pending: 2,
//     completed: 1,
//     cancelled: 1
// }

const orders4 = [
  { status: "pending" },
  { status: "completed" },
  { status: "pending" },
  { status: "cancelled" },
];

const pendingStatus = orders4.filter((o) => o.status === "pending");
console.log(`Số đơn hàng có trạng thái pending là: ${pendingStatus.length}`);

const pendingCompleted = orders4.filter((o) => o.status === "completed");
console.log(
  `Số đơn hàng có trạng thái completed là: ${pendingCompleted.length}`,
);

const pendingCancelled = orders4.filter((o) => o.status === "cancelled");
console.log(
  `Số đơn hàng có trạng thái cancelled là: ${pendingCancelled.length}`,
);

// Bài 17: Đếm tổng số học sinh
// const classes = [
//     {
//         name: "A",
//         students: ["An", "Bình"]
//     },
//     {
//         name: "B",
//         students: ["Cường"]
//     }
// ];

// Kết quả 3

const classes = [
  { name: "A", students: ["An", "Bình"] },
  { name: "B", students: ["Cường"] },
];

let totalStudents = 0;

for (const element of classes) {
  totalStudents += element.students.length;
}

console.log(totalStudents);

/**
 * 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến
  số đó.
  Input: 20
  Output: 19
  Input: 15
  Output: 13
 */

const ktNguyenTo = (n) => {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const timNguyenToLonNhat = (n) => {
  for (let i = n; i >= 2; i--) {
    if (ktNguyenTo(i)) {
      return i;
    }
  }
  return null;
};

console.log(timNguyenToLonNhat(20));
console.log(timNguyenToLonNhat(15));

// Bài 2: Tìm tất cả các cặp số (a, b) sao cho a và b là số nguyên tố và a + b = n, với n là số nguyên dương cho trước.
//   Input: 10
//   Output: (3, 7)
//   Input: 20
//   Output: (3, 17), (7, 13)

const timCapSo = (n) => {
  for (let a = 2; a <= n; a++) {
    let b = n - a;

    if (ktNguyenTo(a) && ktNguyenTo(b)) {
      console.log(`${a}, ${b}`);
    }
  }
};

timCapSo(20);
timCapSo(10);

/**
 * Bài 4: cho mảng number: const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
nếu phần tử trong mảng chẵn thì cho vào mảng evenNumbers = [] => kết quả evenNumber = [4,44,64,24,32,74,22]
và ngược lại lấy số lẻ cho vào mảng oddNumbers
 */

const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];

const eventNumber = arrNumber.filter((num) => num % 2 === 0);

const oddNumber = arrNumber.filter((num) => num % 2 !== 0);

console.log(eventNumber);
console.log(oddNumber);

/**
 * Bài 3: Cho một mảng nums gồm các số nguyên, hãy trả về số lượng các số trong mảng đó có số chữ số chẵn.
 *
  Đầu vào: nums = [12,345,2,6,7896]
  Đầu ra: 2
  Giải thích:
    12 có 2 chữ số (số chữ số chẵn).
    345 có 3 chữ số (số chữ số lẻ).
    2 có 1 chữ số (số chữ số lẻ).
    6 có 1 chữ số (số chữ số lẻ).
    7896 có 4 chữ số (số chữ số chẵn).
    Do đó, chỉ có 12 và 7896 có số chữ số chẵn.
 */

const nums = [12, 345, 2, 5, 7896];

const findNumber = (arr) => {
  let count = 0;

  for (let num of arr) {
    let digits = 0;

    while (num > 0) {
      digits++;
      num = Math.floor(num / 10);
    }

    if (digits % 2 === 0) count++;
  }

  return count;
};

console.log(findNumber(nums));

// console.log(345 / 10);
// console.log(Math.floor(345 / 10));
