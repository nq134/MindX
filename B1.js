function calc() {
  console.log("button");
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const resultEle = document.getElementById("result");

  const num1Value = Number(num1.value);
  const num2Value = Number(num2.value);
  console.log("num1Value:", num1Value);
  console.log("num2Value:", num2Value);

  if (num1Value > num2Value) {
    resultEle.innerHTML = `1<2`;
    return;
  }

  let sum = 0;

  for (let i = num1Value; i <= num2Value; i++) {
    const isPrimeNumber = isPrime(i);
    if (isPrimeNumber) {
      sum += i;
    }
  }

  resultEle.innerHTML = `Tổng số nguyên tố từ ${num1Value} đến ${num2Value} : ${sum}`;
}

function isPrime(a) {
  if (a < 2) {
    return false;
  }
  let count = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      count += 1;
    }
  }

  if (count > 2) {
    return false;
  }

  return true;
}
