describe('Javabuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('multiples of 3', function() {
    it('fizz', function() {
      expect(javabuzz.play(3)).toEqual('Fizz');
    });

    it('fizz', function() {
      expect(javabuzz.play(9)).toEqual('Fizz');
    });
  });

  describe('multiples of 5', function() {
    it('buzz', function() {
      expect(javabuzz.play(5)).toEqual('Buzz');
    });

    it('fizz', function() {
      expect(javabuzz.play(10)).toEqual('Buzz');
    });
  });

  describe('multiples of 3 and 5', function() {
    it('fizzbuzz', function() {
      expect(javabuzz.play(15)).toEqual('Fizzbuzz');
    });

    it('fizzbuzz', function() {
      expect(javabuzz.play(60)).toEqual('Fizzbuzz');
    });
  });

  describe('all other numbers', function() {
    it('2 for 2', function() {
      expect(javabuzz.play(2)).toEqual(2);
    });

    it('34 for 34', function() {
      expect(javabuzz.play(34)).toEqual(34);
    });
  });
});
