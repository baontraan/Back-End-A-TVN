const usersDB = [
  { id: 1, name: "Nguyen Van A", email: "a@gmail.com" },
  { id: 2, name: "Tran Thi B", email: "b@gmail.com" },
];

// BT 1

const getUserByIdCallBack = (id, cb) => {
  setTimeout(() => {
    const user = usersDB.find((user) => user.id === id);

    user ? cb(null, user) : cb(`Không tìm thấy user có ID = ${id}`, null);
  }, 1000);
};

getUserByIdCallBack(1, (error, user) => {
  error
    ? console.error("Lỗi: ", error)
    : console.log("Bài 1 - Tìm thấy user: ", user);
});

getUserByIdCallBack(99, (error, user) => {
  error
    ? console.error("Bài 1 - Kết quả mong muốn (Báo Lỗi): ", error)
    : console.log("User: ", user);
});

// BT 2

const getUserByIdPromise = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = usersDB.find((user) => user.id === id);

      user ? resolve(user) : reject(`Không tìm thấy user có ID = ${id}`);
    }, 1000);
  });
};

getUserByIdPromise(2)
  .then((user) => console.log("Bài 2 - Tìm thấy user: ", user))
  .catch((err) => console.error("Lỗi: ", err));

getUserByIdPromise(404)
  .then((user) => console.log("User:", user))
  .catch((error) =>
    console.error("Bài 2 - Kết quả mong muốn (Báo lỗi):", error),
  );

// BT3

const runApp = async (userId) => {
  try {
    console.log(`--- Đang tìm kiếm user có ID: ${userId} ---`);

    const user = await getUserByIdPromise(userId);

    console.log("Bài 3 - Kết quả tìm thấy:", user);
  } catch (error) {
    console.error("Bài 3 - Bắt được lỗi hệ thống:", error);
  }
};

runApp(1);
runApp(55);
