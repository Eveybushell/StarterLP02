Location:bankOfTheNorth const BALANCE
Issue: Balance is an array of two numbers
Explanation: Balance is not clarified to be checkings or savings in the requirements
Suggested Fix: Either remove the brackets and the space after the comma to make a single balance or adjust the rest of the functions to include either the checking or savings
Status: Ongoing

Location:bankOfTheNorth const BALANCE
Issue: BALANCE cannot be changed
Explanation: consts cannot be altered, so the type needs to be changed to be alterable
Suggested Fix: Change const to let
Status: Ongoing

Location: bankOfTheNorth deposit function
Issue: balance input is unclear
Explanation: balance is an unclear name for the input
Suggested Fix: Change balance to depositAmount or something similar
Status: Ongoing

Location: bankOfTheNorth deposit function
Issue: function doesn't change balance
Explanation: The function only updates the input, not the user's balance
Suggested Fix:
Status: Ongoing

Location: bankOfTheNorth withdrawl function
Issue: balance is used rather than amount
Explanation: balance is not an input
Suggested Fix: Change balance to amount
Status: Ongoing

Location: bankOfTheNorth withdrawl function
Issue: function changes amount, not BALANCE
Explanation: The function only changes the amount, not BALANCE
Suggested Fix: change first amount in line 14 to BALANCE
Status: Ongoing

Location: bankOfTheNorth withdrawl function
Issue: Function adds to BALANCE
Explanation: Function is supposed to withdraw money, but line 25 adds to BALANCE
Suggested Fix: change '+' to '-'
Status: Ongoing

Location: bankOfTheNorth withdrawl function
Issue: No check for overwithdrawl
Explanation: Requirements specify no negative balance. If the amount is larger than balance, this will happen
Suggested Fix: Add a check to make sure amount is not larger than BALANCE
Status: Ongoing

Location: bankOfTheNorth balanceCheck function
Issue: Doesn't require PIN
Explanation: All functions require a PIN check and this doesn't have that function
Suggested Fix: Add pin as an input and implement a check to confirm that pin as strictly equalling the USER_PIN
Status: Ongoing

Location: bankOfTheNorth balanceCheck function
Issue: returns BALANCE before the log
Explanation: The console statement is not reached because the function exits after the return
Suggested Fix: Swap placement of BALANCE and console.log
Status: Ongoing

Location: bankOfTheNorth transfer function
Issue: receiver is misspelled
Explanation: receiver is spelled as reciver and should be changed for clarity
Suggested Fix: Change instances of reciver to receiver
Status: Ongoing

Location: bankOfTheNorth transfer function
Issue: Doesn't require PIN
Explanation: All functions require a PIN check and this doesn't have that function
Suggested Fix: Implement a check to confirm that pin as strictly equalling the USER_PIN
Status: Ongoing

Location: bankOfTheNorth transfer function
Issue: balanceCheck and withdrawl are missing pin input
Explanation: balanceCheck and withdrawl will require pin to function
Suggested Fix: add (pin) at the end of balanceCheck and to the inputs of withdrawl
Status: Ongoing

Location: bankOfTheNorth transfer function
Issue: No check for overwithdrawal
Explanation: Requirements specify no negative balance. If the amount is larger than balance, this will happen
Suggested Fix: Add a check to make sure amount is not larger than BALANCE before the withdrawal operation.
Status: Ongoing