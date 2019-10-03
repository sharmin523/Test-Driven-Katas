const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
  it('Returns an array', () => {
    expect(twoSum([1, 2, 3], 5)).to.be.an("array");
  });
  it('Returns indices of two distinct element', () => {
    expect(twoSum([1, 2, 3], 5).length).to.equal(2);
    expect(twoSum([1, 2, 3], 5)[0]).to.not.equal(twoSum([1, 2, 3], 5)[1])
  });
  it('Returns indices of two distinct element that sum up to target', () => {
    expect(twoSum([1, 2, 3], 5)).to.deep.equal([1, 2]);
  });
  it('Returns an empty array if nothing is found', () => {
    expect(twoSum([1, 2, 3], 6)).to.deep.equal([]);
  });
});
