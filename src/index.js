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
        "", "thousend", "million"
        ];
        
    if (!number) return ZERO_TO_NINETEEN[0];

    let readableNumber = "";
    
    //выделяем трады
    let triads = [];
    let temp = number;
    while(temp) {
        triads.push(temp%1000);
        temp=Math.floor(temp/1000);
    }
    triads = triads.reverse();
    // console.log("Кол-во триад: " + triads.length + "\nТриады: " + triads)
    
    //исследуем каждую триаду
    for (let i = 0; i<triads.length; i++) {
        
        let triad = triads[i];
        
        if (triad.toString().length === 3) {
         readableNumber += ZERO_TO_NINETEEN[Math.floor(triad/100)] + ' hundred';
         triad%=100;
        readableNumber+=' ';
        }
       
        if (triad.toString().length === 2) {
            if (triad<20) {
                readableNumber+=ZERO_TO_NINETEEN[triad%100];
                triad=0;
            }
            else {
                readableNumber+=TY[triad.toString()[0] - 2];
                triad%=10;
                
            }
            readableNumber+=' ';
        }

        if (triad!=0) readableNumber+=ZERO_TO_NINETEEN[triad] + ' ';
    
        if (triads[i]) readableNumber+=RANK[triads.length - 1 - i];
        readableNumber+=' ';
    }
        
    return readableNumber.trim();
}
