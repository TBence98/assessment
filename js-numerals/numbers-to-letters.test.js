import numbersToLetters from "./numbers-to-letters";
import { convertToBritishEnglish } from "./numbers-to-letters";

function dictionaryTest(arr, expect) {
    for (let i = 0; i < arr.length; i = i + 2) {
        expect(numbersToLetters(arr[i])).toBe(arr[i + 1]);
    }
}

describe("numbers-to-letters.js", () => {
    test("Convert small numbers", () => {
        const testCases = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        testCases.forEach((val, i) => {
            expect(numbersToLetters(i)).toBe(val);
        });
    });

    test("Convert tens", () => {
        const testCases = [
            20,
            "twenty",
            30,
            "thirty",
            40,
            "forty",
            50,
            "fifty",
            60,
            "sixty",
            70,
            "seventy",
            80,
            "eighty",
            90,
            "ninety",
        ];

        dictionaryTest(testCases, expect);
    });

    test("Convert between 21-99", () => {
        const testCases = [
            21,
            "twenty-one",
            32,
            "thirty-two",
            43,
            "forty-three",
            54,
            "fifty-four",
            65,
            "sixty-five",
            76,
            "seventy-six",
            87,
            "eighty-seven",
            98,
            "ninety-eight",
        ];

        dictionaryTest(testCases, expect);
    });

    test("Convert big numbers", () => {
        const testCases = [
            10 ** 2,
            "one hundred",
            10 ** 3,
            "one thousand",
            10 ** 4,
            "ten thousand",
            10 ** 5,
            "one hundred thousand",
            10 ** 6,
            "one million",
            10 ** 7,
            "ten million",
            10 ** 8,
            "one hundred million",
            10 ** 9,
            "one billion",
            10 ** 10,
            "ten billion",
            10 ** 11,
            "one hundred billion",
        ];

        dictionaryTest(testCases, expect);
    });

    test("Convert negatives", () => {
        const testCases = [
            -7,
            "negative seven",
            -42,
            "negative forty-two",
            -2001,
            "negative two thousand and one",
            -1999,
            "negative one thousand, nine hundred and ninety-nine",
            -17999,
            "negative seventeen thousand, nine hundred and ninety-nine",
        ];

        dictionaryTest(testCases, expect);
    });

    // Slightly modified, because the current version of the project not support British English counting
    test("Dina test cases", () => {
        const testCases = [
            7,
            "seven",
            42,
            "forty-two",
            2001,
            "two thousand and one",
            1999,
            "one thousand, nine hundred and ninety-nine",
            17999,
            "seventeen thousand, nine hundred and ninety-nine",
        ];

        dictionaryTest(testCases, expect);
    });
});

describe("convertToBritishEnglish ", () => {
    test("converts numbers between 1000 and 2000", () => {
        expect(convertToBritishEnglish(1001)).toBe("ten hundred and one");
        expect(convertToBritishEnglish(1234)).toBe(
            "twelve hundred and thirty-four"
        );
        expect(convertToBritishEnglish(1678)).toBe(
            "sixteen hundred and seventy-eight"
        );
        expect(convertToBritishEnglish(1999)).toBe(
            "nineteen hundred and ninety-nine"
        );
    });

    test("throws an error if the input is not a number", () => {
        expect(() => convertToBritishEnglish("abc")).toThrow(
            "Input has to be a number!"
        );
        expect(() => convertToBritishEnglish(Infinity)).toThrow(
            "Input has to be a number!"
        );
    });

    test("throws a RangeError if the input is not within the specified range", () => {
        expect(() => convertToBritishEnglish(999)).toThrow(
            "Argument must be a number between 1000 and 2000 exclusive, but received 999"
        );
        expect(() => convertToBritishEnglish(2001)).toThrow(
            "Argument must be a number between 1000 and 2000 exclusive, but received 2001"
        );
    });
});
