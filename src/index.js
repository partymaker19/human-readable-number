module.exports = function toReadable(number) {
    const num = [
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

    const ten = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const hundred = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
    ];

    if (number < 20) {
        return num[number];
    } else if (number < 100) {
        return (
            ten[Math.floor(number / 10 - 2)] +
            (number % 10 ? " " + num[number % 10] : "")
        );
    } else if (number < 1000) {
        return (
            hundred[Math.floor(number / 100 - 1)] +
            (number % 100 ? " " + toReadable(number % 100) : "")
        );
    }
};
