//Write a function in JS to find the prime factors of any integer. 
//This function should take an integer as a parameter and should return a list of prime factors for that number. 
//Suggest the time complexity of your written function.

function primefactors(n) {
    const factors = [];
    let divisor = 2;

     while (n > 2) {
      if (n % divisor === 0) {
        factors.push(divisor);
        n /= divisor;
      } else {
        divisor++;
      }
    }
  
    return factors;
  }