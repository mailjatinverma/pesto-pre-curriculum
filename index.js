const describe = (desc, fn) => {
    console.log(desc)
    fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
    toBe: (assertion) => {
      if (exp === assertion) {
       console.log('pass');
       return true;
     } else {
       console.log('fail');
       return false;
     }
  }
})

const expect = (exp) => matchers(exp)

function adder(a, b) {
  return a + b 
}

function subtractor(a, b) {
    return a - b;
}

function multiplier(a, b) {
    return a*b;
}

function division(a, b) {
    return a/b;
}

module.exports = {
  describe,
  expect,
  it,
  matchers,
  adder,
  subtractor,
  multiplier,
  division
}