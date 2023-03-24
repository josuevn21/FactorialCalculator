function FirstFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * FirstFactorial(num - 1);
    }
  }
  
  const form = document.querySelector('form');
  const resultDiv = document.querySelector('#result');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const num = Number(document.querySelector('#number').value);
    const result = FirstFactorial(num);
    resultDiv.textContent = `Factorial of ${num} is ${result}.`;
  });
  
  
  //Show the output:
  document.write(output)