// Bài 1: Đếm số user đang hoạt động

const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true },
];

const filterUserActive = users.filter((user) => user.active === true);

console.log(`Số user đang hoạt động là: ${filterUserActive.length}`);

//  *  Bài 2: Lấy tên từ danh sách user
//  * [
//     {name: "An", age: 20},
//     {name: "Bình", age: 25}
//    ]
//     → ["An", "Bình"]

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

const getUserName = user.map((element) => element.name);

console.log(getUserName);

//   Bài 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
//         a: tính trung bình cộng số âm
//         b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
//         c: tìm số âm lớn nhất trong mảng

const number = [2, -5, 6, -7, -4, 7, -1, -1];

let tong = 0;
let count = 0;

const sumNegativeNum = number.forEach((num) => {
  if (num < 0) {
    tong += num;
    count++;
  }
});

const avgNegativeNum = tong / count;

console.log(avgNegativeNum);

const printNegativeGreaterThanAVG = number.filter(
  (num) => num > avgNegativeNum,
);
console.log(printNegativeGreaterThanAVG);

const negativeNumber = number.filter((num) => num < 0);
console.log(negativeNumber);

let max = negativeNumber[0];

negativeNumber.forEach((num) => {
  if (num > max) max = num;
});

console.log(`Số âm lớn nhất trong mảng là ${max}`);

// Bài 4: Đếm số đơn hàng theo trạng thái

const orders = [
  { status: "pending" },
  { status: "completed" },
  { status: "pending" },
  { status: "cancelled" },
];

const pendingStatus = orders.filter((o) => o.status === "pending");
console.log(`Số đơn hàng có trạng thái pending là: ${pendingStatus.length}`);

const pendingCompleted = orders.filter((o) => o.status === "completed");
console.log(`Số đơn hàng có trạng thái pending là: ${pendingCompleted.length}`);

const pendingCancelled = orders.filter((o) => o.status === "cancelled");
console.log(`Số đơn hàng có trạng thái pending là: ${pendingCancelled.length}`);

// Bài 5: Tìm đơn hàng có giá trị cao nhất

// const orders = [
//     { id: 1, total: 500 },
//     { id: 2, total: 1200 },
//     { id: 3, total: 800 }
// ];
// Kết quả: { id: 2, total: 1200 }

const orders1 = [
  { id: 1, total: 500 },
  { id: 2, total: 1200 },
  { id: 3, total: 800 },
];

let maxOrder = orders1[0].total;

orders1.forEach((o) => {
  if (o.total > maxOrder) maxOrder = o.total;
});

const filterOrdersHasMaxTotal = orders1.filter((o) => o.total === maxOrder);

console.log(filterOrdersHasMaxTotal);

/**
 * Bài 6: const sales = [
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

// result["áo"] = 7;
// console.log(result);

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
