module.exports = function toReadable (number) {
      const ZERO_TO_NINETEEN = [
        "zero", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen"
        ];
    const TY = [
            "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
            ]
    const RANK = [
        "hundred"
        ];

    let readableNumber = "";
    let stringNumber = number.toString();
    
    if (number >= 100) {
         readableNumber = ZERO_TO_NINETEEN[Math.floor(number/100)] + ' ' + RANK[0]+ ' ';
         number%=100;
    }
       
    if (number>=20 && number<100) {
     readableNumber+=TY[+number.toString()[0]-2] + ' ';
     number%=10;
    }
    
    if (number != 0) 
    readableNumber+=ZERO_TO_NINETEEN[number];

    return readableNumber;
}
