function numbersToLetters(number) {
    const smallNumbers = [
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

    const tensGroup = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const scaleNumbers = ["", "thousand", "million", "billion"];

    // Handle zero
    if (number === 0) {
        return smallNumbers[0];
    }

    // Array to hold four three-digit groups
    const digitGroups = [];

    // Ensure a positive number to extract from
    let positive = Math.abs(number);

    // Extract the three-digit groups
    for (let i = 0; i < 4; i++) {
        digitGroups[i] = positive % 1000;
        positive = Math.floor(positive / 1000);
    }

    const groupText = [];

    for (let i = 0; i < 4; i++) {
        groupText[i] = threeDigitGroupToWords(digitGroups[i]);
    }

    function threeDigitGroupToWords(threeDigits) {
        let groupText = "";

        // Determine the hundreds and the remainder
        const hundreds = Math.floor(threeDigits / 100);
        const tensUnits = threeDigits % 100;

        // Handle hundreds
        if (hundreds !== 0) {
            groupText += smallNumbers[hundreds] + " hundred";

            if (tensUnits !== 0) {
                groupText += " and ";
            }
        }

        // Determine the tens and units
        const tens = Math.floor(tensUnits / 10);
        const units = tensUnits % 10;

        // Handle tens
        if (tens >= 2) {
            groupText += tensGroup[tens];
            if (units !== 0) {
                groupText += "-" + smallNumbers[units];
            }
        } else if (tensUnits !== 0) {
            groupText += smallNumbers[tensUnits];
        }

        return groupText;
    }

    // Recombine the three-digit groups
    let combined = groupText[0];
    let appendAnd = digitGroups[0] > 0 && digitGroups[0] < 100;

    // Process the remaining groups in turn, smallest to largest
    for (let i = 1; i < 4; i++) {
        // Only add non-zero items
        if (digitGroups[i] !== 0) {
            // Build the string to add as a prefix
            let prefix = groupText[i] + " " + scaleNumbers[i];

            if (combined.length !== 0) {
                prefix += appendAnd ? " and " : ", ";
            }

            // Opportunity to add 'and' is ended
            appendAnd = false;

            // Add the three-digit group to the combined string
            combined = prefix + combined;
        }
    }

    // Handle negatives
    if (number < 0) {
        combined = "negative " + combined;
    }

    return combined;
}

console.log(numbersToLetters(1256432));
