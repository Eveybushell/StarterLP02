// Program requirements:
// - A user can withdraw funds.
// - A user can deposit funds.
// - A user's balance should never become negative.
// - A PIN must be provided during every action.

const USER = "Rose Thecat";
let BALANCE = 983;
const USER_PIN = 1234;

// Deposits money into a user's account.

export function deposit(pin: number, amount: number) {
    if (pin !== USER_PIN) {
      console.log("Incorrect PIN");
      return;
    }

    if (amount <= 0) {
      console.log("Deposit amount must be positive");
      return BALANCE;
    }

    BALANCE += amount;
    console.log(BALANCE);
    return BALANCE;
  }


// Withdraws money from a user's account.

export function withdrawal(pin: number, amount: number) {
    if (pin !== USER_PIN) {
      console.log("Incorrect PIN");
      return;
    }

    if (amount <= 0) {
      console.log("Withdrawal amount must be positive");
      return BALANCE;
    }

    if (amount > BALANCE) {
      console.log("Insufficient funds");
      return BALANCE;
    }

    BALANCE -= amount;
    console.log(BALANCE);
    return BALANCE;
  }


// Returns the account balance.
export function balanceCheck(pin: number) {
    if (pin !== USER_PIN) {
        console.log("Incorrect PIN");
        return;
      }

console.log(`Your balance is ${BALANCE}`);
  return BALANCE;

}

// Transfers money to another user's account and withdraws it from the account.
export function transfer(pin: number, amount: number, receiver: string){
    if (pin !== USER_PIN) {
      console.log("Incorrect PIN");
      return;
    }
    if (amount <= 0 || amount > BALANCE) {
        console.log("Invalid transfer amount");
        return BALANCE;
      }
     {
  const transferAmount = withdrawal(pin,amount);
  console.log(`Success! ${amount} was transferred to ${receiver}`);
  return balanceCheck(pin);
}
}
// AI transparency: AI was used to clean up this code.