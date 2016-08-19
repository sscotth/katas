// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {
  
  it('are shorter to write', function() {
    var func = () => {
      return 'I am func';
    };
    assert.strictEqual(func(), 'I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    var func = () => 'I return too';
    assert.strictEqual(func(), 'I return too');
  });

  it('one parameter can be written without parens', () => {
    var func = p => p + 1;
    assert.strictEqual(func(23), 24);
  });

  it('many params require parens', () => {
    var func = (param1, param2) => param1 + param2;
    assert.strictEqual(func(23, 42), 23+42);
  });

  it('body needs parens to return an object', () => {
    var func = () => ({iAm: 'an object'});
    assert.deepEqual(func(), {iAm: 'an object'});
  });

});
