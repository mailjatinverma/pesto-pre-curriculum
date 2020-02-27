const {
    describe,
    it,
    expect,
    matchers,
    adder,
    subtractor,
    multiplier,
    division 
  } = require('./index')

  describe('adder', () => {
    it('adds two numbers', () => {
      const result = adder(3, 2)
      expect(result).toBe(5)
    })
  })

  describe('subtractor', () => {
    it('subtractor two numbers', () => {
      const result = subtractor(3, 1)
      expect(result).toBe(2);
    })
  })

  describe('multiplier', () => {
    it('multiplier two numbers', () => {
      const result = multiplier(4, 3)
      expect(result).toBe(12);
    })
  })

  describe('division', () => {
    it('division two numbers', () => {
      const result = division(12, 3)
      expect(result).toBe(4);
    })
  })