const reverse = require('./hw_index.js');

describe('Test reverse func', () =>
  it('reverse happy to yppah', () => {
    expect(reverse("happy")).toBe("yppah");
  })
);