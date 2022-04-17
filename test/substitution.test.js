const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() test written by student", () => {
    it("space should be maintained in encoding", () => {
        const message = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(message, alphabet);
        expect(actual).to.equal(expected);
    });
    it("space should be maintained in decoding", () => {
        const message = "elp xhm xf mbymwwmfj dne";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "you are an excellent spy";
        const actual = substitution(message, alphabet, false);
        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const messageA = "happy life";
        const messageB = "Happy Life";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const resultA = substitution(messageA, alphabet);
        const resultB = substitution(messageB, alphabet);
        expect(resultA).to.equal(resultB);
    });
    it("should return false if alphabet is not exactly 26 characters", () => {
        const message = "life";
        const alphabet = "$wae&zrdxtfcygvuhbijnopl";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if alphabet is not unique", () => {
        const message = "life";
        const alphabet = "$wae&abcabcabcabcabcabcabcabcyz";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });
});