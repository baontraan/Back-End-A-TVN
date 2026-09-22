export {};

// Bài Tập 4: Hình học
// - Tạo lớp Shape (trừu tượng) với phương thức calculateArea().
// - Tạo lớp Rectangle và Circle kế thừa từ Shape, triển khai calculateArea() tương ứng.
// - Viết chương trình tính diện tích các hình và hiển thị kết quả

abstract class Shape {
  abstract calculateArea(): number;

  abstract displayInfo(): void;
}

class Rectangle extends Shape {
  private width!: number;
  private height!: number;

  constructor(width: number, height: number) {
    super();
    this.setWidth(width);
    this.setHeight(height);
  }

  public getWidth(): number {
    return this.width;
  }

  public setWidth(width: number) {
    if (width <= 0) throw new Error("Width must > 0");

    this.width = width;
  }

  public getHeight(): number {
    return this.height;
  }

  public setHeight(height: number) {
    if (height <= 0) throw new Error("Height must > 0");

    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public displayInfo(): void {
    console.log(
      `Rectangle [Width: ${this.width}, Height: ${this.height}] -> Area: ${this.calculateArea().toFixed(2)}`,
    );
  }
}

class Circle extends Shape {
  private radius!: number;

  constructor(radius: number) {
    super();
    this.setRadius(radius);
  }

  public getRadius() {
    return this.radius;
  }

  public setRadius(radius: number) {
    if (radius <= 0) throw new Error("Radius must > 0");

    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public displayInfo(): void {
    console.log(
      `Circle [Radius: ${this.radius}] -> Area: ${this.calculateArea().toFixed(2)}`,
    );
  }
}

console.log("--- Success ---");
try {
  const shapes: Shape[] = [
    new Rectangle(5, 10),
    new Circle(3.5),
    new Rectangle(4, 4),
    new Circle(7),
  ];

  shapes.forEach((shape) => shape.displayInfo());
} catch (error: any) {
  console.error("Error: ", error.message);
}

console.log("\n--- Error ---");

try {
  new Rectangle(-1, 5);
} catch (error: any) {
  console.log(`Error: ${error.message}`);
}

try {
  new Circle(0);
} catch (error: any) {
  console.log(`Error:  ${error.message}`);
}
