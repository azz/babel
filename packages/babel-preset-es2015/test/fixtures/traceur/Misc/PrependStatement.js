var count = 0;
var o = {
  get x() {
    count++;
    return 1;
  }
};

function f({x}) {}
f(o);
assert.equal(1, count);
