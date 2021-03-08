let begin = +prompt("Enter beginning of the range", '1');
let end = +prompt("Enter end of the range", '100');

if (!(+begin || +end)) {
    console.log("Wrong! Default values:");
    checkNumber();
}
else    
    checkNumber(begin, end);

function checkNumber(beginRange = 1, endRange = 100) {
    for (let i = `${beginRange}`.trim(); i <= `${endRange}`.trim(); i++) {
        let str = "";

        str += i;
        if (i % 2 === 0) {
            str += " is even";
        }
        if (i % 3 === 0) {
            if (str.length > 3)
                str += ",";
            str += " is multiple of 3";
        }
        if (i % 10 === 0) {
            if (str.length > 3)
                str += ",";
            str += " is multiple of 10";
        }
        if (str.length <= 3)
            str += " -";
        str += "\n";
        console.log(str);
    }
}
