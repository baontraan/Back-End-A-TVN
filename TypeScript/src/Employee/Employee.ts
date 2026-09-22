export {};

class Employee {
  protected name!: string;
  protected position!: string;
  protected salary!: number;

  constructor(name: string, position: string, salary: number) {
    this.setName(name);
    this.setPosition(position);
    this.setSalary(salary);
  }

  public setName(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("Name cannot be empty");
    }
    this.name = value;
  }

  public getName(): string {
    return this.name;
  }

  public setPosition(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("Position cannot be empty");
    }
    this.position = value;
  }

  public getPosition(): string {
    return this.position;
  }

  public setSalary(value: number) {
    if (value <= 0) {
      throw new Error("Salary must >= 0");
    }
    this.salary = value;
  }
  public getSalary(): number {
    return this.salary;
  }

  public getDetails(): string {
    return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary.toLocaleString()} VNĐ`;
  }
}

class Manager extends Employee {
  private bonus!: number;

  constructor(name: string, salary: number, bonus: number) {
    super(name, "Manager", salary);
    this.setBonus(bonus);
  }

  public setBonus(value: number) {
    if (value < 0) {
      throw new Error("Bonus must >= 0");
    }
    this.bonus = value;
  }
  public getBonus(): number {
    return this.bonus;
  }

  public override getDetails(): string {
    return `${super.getDetails()}, Bonus: ${this.bonus.toLocaleString()} VNĐ`;
  }
}

class Developer extends Employee {
  private programmingLanguage!: string;

  constructor(name: string, salary: number, programmingLanguage: string) {
    super(name, "Developer", salary);
    this.setProgrammingLanguage(programmingLanguage);
  }

  public setProgrammingLanguage(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("Programming language cannot be empty");
    }
    this.programmingLanguage = value;
  }

  public getProgrammingLanguage(): string {
    return this.programmingLanguage;
  }

  public override getDetails(): string {
    return `${super.getDetails()}, Program Language: ${this.programmingLanguage}`;
  }
}

try {
  const employees: Employee[] = [
    new Manager("Nguyễn Văn A", 25000000, 5000000),
    new Developer("Trần Thị B", 18000000, "TypeScript"),
    new Developer("Lê Văn C", 20000000, "Java"),
  ];

  console.log("--- List Employees ---");
  employees.forEach((emp, index) => {
    console.log(`\n${index + 1}. ${emp.getDetails()}`);
  });
} catch (error: any) {
  console.error("Error: ", error.message);
}
