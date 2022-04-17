const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() test written by student", () => {
    it("should return false if the shift amount is 0", () => {
        const message = "happy life";
        const shift = 0;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if the shift amount is less than -25", () => {
        const message = "happy life";
        const shift = -27;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if the shift amount is greater than 25", () => {
        const message = "happy life";
        const shift = 27;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should ignore capital letters", () => {
        const messageA = "happy life";
        const messageB = "Happy Life";
        const shift = 3;
        const resultA = caesar(messageA, shift);
        const resultB = caesar(messageB, shift);
        expect(resultA).to.equal(resultB);
    });
    it("should go past the end of the alphabet when encoding", () => {
        const message = "working with z";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "zrunlqj zlwk c"
        expect(actual).to.equal(expected);
    });
    it("should maintain nonalphabetic symbols", () => {
        const message = "working is great!$$";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "zrunlqj lv juhdw!$$"
        expect(actual).to.equal(expected);
    });
});