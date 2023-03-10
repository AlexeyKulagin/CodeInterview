/*
Missing Digit
Have the function MissingDigit(str) take the str parameter, which will be a simple mathematical formula with three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return the digit that completes the equation. In one of the numbers in the equation, there will be an x character, and your program should determine what digit is missing. For example, if str is "3x + 12 = 46" then your program should output 4. The x character can appear in any of the three numbers and all three numbers will be greater than or equal to 0 and less than or equal to 1000000.
Examples
Input: "4 - 2 = x"
Output: 2
Input: "1x0 * 12 = 1200"
Output: 0
*/

function MissingDigit(str) {

  // code goes here

  const arrayOfStr = str.split(' ')
  const operators = ['+', '-', '*', '/']
  let operator = ' '

  const operand1 = arrayOfStr[0]
  const operand2 = arrayOfStr[2]
  const operand3 = arrayOfStr[4]

  let x = 0

  for (let i of operators) {

    for (let j of arrayOfStr) {
      if (i === j) {
        operator = i;
        break
      }
    }

    if (operator !== ' ') break
  }

  let indexOfXinArr = 0
  let indexOfX = 0

  for (let i = 0; i < arrayOfStr.length; i = i + 2) {
    indexOfX = arrayOfStr[i].indexOf('x')
    if (indexOfX !== -1) {
      indexOfXinArr = i;
      break
    }
  }

  if (indexOfXinArr === 0) {
    const operand2Num = Number(operand2)
    const operand3Num = Number(operand3)
    let operand1Num = 0;

    if (operator === '+') {
      operand1Num = operand3Num - operand2Num
    }
    else if (operator === '-') {
      operand1Num = operand3Num + operand2Num
    }
    else if (operator === '*') {
      operand1Num = operand3Num / operand2Num
    }
    else if (operator === '/') {
      operand1Num = operand3Num * operand2Num
    }
    else return 'Error operator'

    x = String(operand1Num)[indexOfX]
  }

  else if (indexOfXinArr === 2) {
    const operand1Num = Number(operand1)
    const operand3Num = Number(operand3)
    let operand2Num = 0

    if (operator === '+') {
      operand2Num = operand3Num - operand1Num
    }
    else if (operator === '-') {
      operand2Num = operand1Num - operand3Num
    }
    else if (operator === '*') {
      operand2Num = operand3Num / operand1Num
    }
    else if (operator === '/') {
      operand2Num = operand1Num / operand3Num
    }
    else return 'Error operator'

    x = String(operand2Num)[indexOfX]
  }

  else if (indexOfXinArr === 4) {
    const operand1Num = Number(operand1)
    const operand2Num = Number(operand2)
    let operand3Num = 0

    if (operator === '+') {
      operand3Num = operand1Num + operand2Num
    }
    else if (operator === '-') {
      operand3Num = operand1Num - operand2Num
    }
    else if (operator === '*') {
      operand3Num = operand1Num * operand2Num
    }
    else if (operator === '/') {
      operand3Num = operand1Num / operand2Num
    }
    else return 'Error operator'

    x = String(operand3Num)[indexOfX]
  }

  else return 'Error operand'

  return (x)
}

// keep this function call here 
console.log(MissingDigit("1x0 * 12 = 1200"));
