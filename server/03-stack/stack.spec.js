const makeStack = (capacity = 2) => {
  if (capacity <= 0) throw new Error('accepts only positive capacity');
  let data = [];
  const getSize = () => data.length;
  const isEmpty = () => getSize() === 0;
  const push = (input) => {
    if (getSize() === capacity) throw new Error('Cannot exceed size ' + capacity);
          data.push(input);
  };
  const pop = () => {
    if (isEmpty()) throw new Error('Cannot pop an empty stack');
    return data.pop();
  };

  return {
    isEmpty,
    size: getSize,
    push,
    pop
  };
};
let stack;
describe('the stack', () => {
  it('Canary test', () => {
    true.should.be.true();
  });
  describe('the stack', () => {
    beforeEach(() => {
      stack = makeStack(2);
    });
    it('starts empty', () => {
      stack.isEmpty().should.be.true();
    });
    it('starts with stack size 0', () => {
      stack.size().should.equal(0);
    });
    it('is not empty after pushed', () => {
      stack.push();
      stack.isEmpty().should.be.false();
    });
    it('leaves stack size 1 after pushed', () => {
      stack.push();
      stack.size().should.equal(1);
    });
    it('leaves stack empty after pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.isEmpty().should.be.true();
    });
    it('leaves stack size 0 after pushed and popped', () => {
      stack.push();
      stack.pop();
      stack.size().should.equal(0);
    });
    it('overflows', () => {
      (() => {
           stack.push();
           stack.push();
           stack.push();
      }).should.throw('Cannot exceed size ' + 2);
    });
    it('under-flows', () => {
      (() => {
        stack.pop();
      }).should.throw('Cannot pop an empty stack');
    });
    it('pops the same one pushed', () => {
      let param = 'Hello';
      stack.push(param);
      stack.pop().should.equal(param);
    });
    it('pops the same two pushed', () => {
      let param = 'Hello';
      let param2 = 'World';
      stack.push(param);
      stack.push(param2);
      stack.pop().should.equal(param2);
      stack.pop().should.equal(param);
    });
    it('accepts only positive capacity', () => {
      (() => {
         makeStack(-1);
      }).should.throw('accepts only positive capacity');
    });
  });
});
