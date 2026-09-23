class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    getBalance(): number {
        return this.balance;
    }
}

const myAccount = new BankAccount(100);
console.log(myAccount.getBalance())
myAccount.deposit(300)
console.log(myAccount.getBalance())