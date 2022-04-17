const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() test written by student", () => {
    it("when decoding, should return false if length is not even", () => {
        const message = "2345 2351343411225";
        const actual = polybius(message, false);
        expect(actual).to.be.false;
    });
    it("space should be maintained in encoding", () => {
        const message = "my message";
        const expected = "2345 23513434112251";
        const actual = polybius(message);
        expect(actual).to.equal(expected);
    });
    it("space should be maintained in decoding", () => {
        const message = "2345 23513434112251";
        const expected = "my message";
        const actual = polybius(message, false);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const messageA = "happy life";
        const messageB = "Happy Life";
        const resultA = polybius(messageA);
        const resultB = polybius(messageB);
        expect(resultA).to.equal(resultB);
    });
    it("letter i and j should return the same when encoding", () => {
        const messageA = "life";
        const messageB = "ljfe";
        const resultA = polybius(messageA);
        const resultB = polybius(messageB);
        expect(resultA).to.equal(resultB);
    });
    it("should include i and j when decoding 42", () => {
        const message = "13421251";
        const actual = polybius(message, false);
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
});