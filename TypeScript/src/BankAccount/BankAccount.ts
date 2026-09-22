export {};

// Bài Tập 2: Hệ thống ngân hàng
// - Tạo lớp BankAccount với các thuộc tính accountNumber, balance.
// - Tạo các phương thức deposit(amount) và withdraw(amount) để cập nhật số dư.
// - Tạo lớp SavingAccount kế thừa BankAccount, thêm thuộc tính interestRate và phương thức
// calculateInterest().

type TBankAccountData = {
  accountNumber: number;
  balance: number;
};

abstract class BankAccount {
  protected accountNumber: number;
  protected balance!: number;

  constructor(data: TBankAccountData) {
    this.accountNumber = data.accountNumber;
    this.setBalance(data.balance);
  }

  public getAccountNumber(): number {
    return this.accountNumber;
  }

  public getBalance(): number {
    return this.balance;
  }

  public setBalance(balance: number): void {
    if (balance < 0) throw new Error("Balance cannot be negative");

    this.balance = balance;
  }

  public deposit(amount: number): number {
    if (amount <= 0) throw new Error("Deposit amount must > 0");
    return (this.balance += amount);
  }

  public abstract withDraw(amount: number): number;
}

class SavingAccount extends BankAccount {
  private interestRate!: number;

  constructor(data: TBankAccountData, interestRate: number) {
    super(data);
    this.setInterestRate(interestRate);
  }

  public getInterestRate(): number {
    return this.interestRate;
  }

  public setInterestRate(interestRate: number): void {
    if (interestRate < 0) {
      throw new Error("Interest Rate must >= 0");
    }
    if (interestRate > 1) {
      throw new Error("Interest Rate cannot greater than 1 (100%)");
    }
    this.interestRate = interestRate;
  }

  public override withDraw(amount: number): number {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be greater than 0");
    }
    if (amount > this.getBalance()) {
      throw new Error("Insufficient funds");
    }

    return (this.balance -= amount);
  }

  public calculateInterest(): number {
    return this.getBalance() * this.getInterestRate();
  }
}

try {
  const accountError = new SavingAccount(
    { accountNumber: 123, balance: 50000 },
    2,
  );

  console.log("Success");
} catch (error: any) {
  console.error("Error: ", error.message);
}

try {
  const saving = new SavingAccount(
    { accountNumber: 999, balance: 50000 },
    0.05,
  );
  console.log(`Success, Account number: ${saving.getAccountNumber()}`);
  console.log(`Balance: ${saving.getBalance()} VND`);

  const interest = saving.calculateInterest();
  console.log(`Interest: ${interest} VND`);

  saving.deposit(10000);
  console.log(`New balance after deposit: ${saving.getBalance()} VND`);

  saving.withDraw(20000);
  console.log(`New balance after draw: ${saving.getBalance()} VND`);

  saving.withDraw(100000);
} catch (error: any) {
  console.error("Error: ", error.message);
}
