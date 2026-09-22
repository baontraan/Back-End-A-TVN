export {};

// Bài Tập 1: Quản lý học sinh
// Tạo một lớp Student với các thuộc tính:
// - name (string)
// - age (number)
// - grade (string)
// Viết một phương thức để hiển thị thông tin của học sinh.

type TStudentData = {
  name: string;
  age: number;
  grade: string;
};

class Student {
  private name: string;
  private age: number;
  private grade: string;

  constructor(data: TStudentData) {
    this.name = data.name;
    this.age = data.age;
    this.grade = data.grade;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    if (!name.length) throw new Error("Name cannot be empty");

    this.name = name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number): void {
    if (age < 1) throw new Error("Age cannot be negative");

    this.age = age;
  }

  public getGrade() {
    return this.grade;
  }

  public setGrade(grade: string) {
    if (!grade.length) throw new Error("Grade cannot be empty");

    this.grade = grade;
  }

  public toString(): void {
    console.log(`
        ====STUDENT INFO====
        \nStudent Name: ${this.getName()}
        \nStudent Age: ${this.getAge()}
        \nStudent Grade: ${this.getGrade()}`);
  }
}

const student1 = new Student({ name: "Alex", age: 18, grade: "9.5" });
student1.toString();
