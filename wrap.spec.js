const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns a string', () => {
    expect(wrap("hello", 10)).to.be.a("string");
  });
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns the same string if max length was not provided', () => {
    expect(wrap("hello world")).to.equal("hello world");
  });
  it('Returns a string for which the length of each line is not longer than maxLen', () => {
    expect(wrap("hello world!", 10)).to.equal("hello\nworld!");
  });
  it('Returns a string for which the length of each line is not longer than maxLen', () => {
    expect(wrap("hello world!", 2)).to.equal("hello\nworld!");
  });
  it('Can handle longer sentences', () => {
    expect(wrap("Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", 15)).to.equal("Lorem ipsum is\nplaceholder\ntext commonly\nused in the\ngraphic, print,\nand publishing\nindustries for\npreviewing\nlayouts and\nvisual mockups.");
  });
});