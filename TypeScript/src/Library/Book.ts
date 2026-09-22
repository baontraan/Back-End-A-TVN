export {};
// Bài Tập 3: Quản lý thư viện
// - Tạo lớp Book với các thuộc tính title, author, ISBN.
// - Tạo lớp Library có danh sách các cuốn sách (books) và các phương thức:
// - addBook(book: Book): Thêm sách.
// - removeBook(ISBN: string): Xóa sách theo ISBN.
// - findBook(title: string): Tìm sách theo tên.

class Book {
  public title!: string;
  public author!: string;
  public ISBN!: string;

  constructor(title: string, author: string, ISBN: string) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setISBN(ISBN);
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string) {
    if (!title || title.trim().length === 0) {
      throw new Error("Title cannot be empty");
    }
    this.title = title.trim();
  }

  public getAuthor(): string {
    return this.author;
  }

  public setAuthor(author: string) {
    if (!author || author.trim().length === 0) {
      throw new Error("Author cannot be empty");
    }
    this.author = author.trim();
  }

  public getISBN(): string {
    return this.ISBN;
  }
  public setISBN(value: string) {
    if (!value || value.trim().length === 0) {
      throw new Error("ISBN cannot be empty");
    }

    this.ISBN = value.trim();
  }
}

class Library {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
    console.log(`Added Successfully: "${book.title}"`);
  }

  public removeBook(ISBN: string): void {
    const initialLength = this.books.length;
    this.books = this.books.filter((book) => book.ISBN !== ISBN);

    if (this.books.length < initialLength) {
      console.log(`Deleted book with ISBN: ${ISBN}`);
    } else {
      console.log(`Cannot found book with ISBN: ${ISBN}`);
    }
  }

  public findBook(title: string): Book[] {
    const result = this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase()),
    );
    return result;
  }

  public listBooks(): void {
    console.log("--- List Books ---");
    if (this.books.length === 0) {
      console.log("The Library is empty.");
      return;
    }
    this.books.forEach((book) => {
      console.log(
        `- Name: ${book.title} | Author: ${book.author} | ISBN: ${book.ISBN}`,
      );
    });
  }
}

console.log("=== TEST CASE 1: VALIDATE BOOK CLASS ===");

try {
  const goodBook = new Book(
    "  TypeScript Basics  ",
    "John Doe",
    "978-3-16-148410-0",
  );
  console.log(
    `Success: Created "${goodBook.getTitle()}" by ${goodBook.getAuthor()}`,
  );
} catch (error: any) {
  console.log(`Fail: ${error.message}`);
}

try {
  const badBook1 = new Book("", "John Doe", "978-3-16-148410-0");
} catch (error: any) {
  console.log(`Intercepted expected error: ${error.message}`);
}

try {
  const badBook2 = new Book("Clean Code", "   ", "978-3-16-148410-0");
} catch (error: any) {
  console.log(`Intercepted expected error: ${error.message}`);
}

console.log("\n=== TEST CASE 2: LIBRARY OPERATIONS ===");

const myLibrary = new Library();

const book1 = new Book("Design Patterns", "Gang of Four", "ISBN-111");
const book2 = new Book("Learning TypeScript", "Josh Goldberg", "ISBN-222");
const book3 = new Book("The Pragmatic Programmer", "Andy Hunt", "ISBN-332");

// Add book
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Get All Book
myLibrary.listBooks();

// Find Book by keyword

const search1 = myLibrary.findBook("typescript");
console.log(search1);

const search2 = myLibrary.findBook("The");
console.log(search2);

// Remove Book by ISBN

myLibrary.removeBook("ISBN-222");

myLibrary.removeBook("ISBN-999");

myLibrary.listBooks();
