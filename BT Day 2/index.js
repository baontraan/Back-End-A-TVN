// 4. Viết chương trình quản lý danh sách SP với chức năng:
// - Thêm sản phẩm mới vào danh sách
// - Hiển thị danh sách sản phẩm
// - Tìm kiếm sản phẩm theo tên
// - Tính tổng giá trị các sản phẩm

let products = [
  { name: "Laptop", price: 1500 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
];

// 1. Hiển thị danh sách sản phẩm
const displayProduct = () => {
  if (!products.length) {
    alert("Danh sách rỗng. Không thể hiển thị");
    return;
  }

  let title = "Danh sách sản phẩm\n";

  products.forEach((element, index) => {
    title += `${index + 1}. Name: ${element.name} | Price: ${element.price}\n`;
  });

  alert(title);
};

// 2. Thêm sản phảm mới

const addNewProduct = () => {
  let productName;
  let productPrice;

  while (true) {
    productName = prompt("Nhập tên sản phẩm: ");

    if (productName.trim() === "" || productName === null) {
      alert("Fields không được để trống. Vui lòng nhập lại");
      continue;
    }

    if (!isNaN(productName)) {
      alert("Sai định dạng. Vui lòng nhập chuỗi, ko nhập số");
      continue;
    }

    break;
  }

  while (true) {
    productPrice = Number(prompt("Nhập giá tiền sản phẩm: "));

    if (productPrice <= 0) {
      alert("Giá tiền phải > 0");
      continue;
    }

    if (isNaN(productPrice)) {
      alert("Sai định dạng. Vui lòng nhập số");
      continue;
    }

    break;
  }

  products.push({
    name: productName,
    price: productPrice,
  });

  alert("Sản phẩm dc thêm mới thành công");
};

// 3. Tìm sản phẩm theo tên

const findProductByName = () => {
  let name;

  if (!products.length) {
    alert("Danh sách rỗng. Không thể tìm kiếm sản phẩm");
    return;
  }

  while (true) {
    name = prompt("Nhập tên sản phẩm cần tìm: ");

    if (name.trim() === "" || name === null) {
      alert("Không dc để trống. Vui lòng nhập lại");
      continue;
    }

    if (!isNaN(name)) {
      alert("Sai định dạng. Tên sản phẩm không dc chứa chữ số");
      continue;
    }

    break;
  }

  let result;
  let title = "Sản phẩm được tìm thấy\n";

  for (const element of products) {
    if (element.name.trim().toLowerCase() === name.trim().toLowerCase()) {
      result = element;
      alert((title += `Name: ${element.name} | Price: ${element.price}`));
      break;
    }
  }

  if (!result) {
    alert(`Sản phẩm có tên ${name} không tồn tại`);
  }
};

// 4. Tính tổng giá trị sản phẩm

const totalProductPrice = () => {
  if (!products.length) {
    alert("Danh sách rỗng. Không thể tính giá trị sản phẩm");
    return;
  }

  const sum = products.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);

  alert(`Tổng giá trị của các sản phẩm là: ${sum}`);
};

let luaChon;

const menu = () => {
  do {
    let menu = `====== CHƯƠNG TRÌNH QUẢN LÝ SẢN PHẨM ======\n
  1. Hiển thị danh sách sản phẩm
  2. Thêm sản phẩm mới
  3. Tìm kiếm sản phẩm theo tên
  4. Tính tổng giá trị các sản phẩm
  0. Thoát chương trình
  Nhập lựa chọn của bạn (0-4):
  `;

    luaChon = Number(prompt(menu));

    switch (luaChon) {
      case 0:
        break;

      case 1:
        displayProduct();
        break;

      case 2:
        addNewProduct();
        break;

      case 3:
        findProductByName();
        break;

      case 4:
        totalProductPrice();
        break;

      default:
        alert("Lựa chọn không hợp lệ. Vui lòng thử lại");
    }
  } while (luaChon != 0);

  alert("CHƯƠNG TRÌNH ĐÃ KẾT THÚC");
};

menu();
