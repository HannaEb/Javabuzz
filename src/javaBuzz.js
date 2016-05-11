function Javabuzz() {
  }

Javabuzz.prototype.play = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return 'Fizzbuzz';
  }
  if (this.isDivisibleBy(5, number)) {
    return 'Buzz';
  }
  if (this.isDivisibleBy(3, number)) {
    return 'Fizz';
  }
  return number;
};

Javabuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
};
