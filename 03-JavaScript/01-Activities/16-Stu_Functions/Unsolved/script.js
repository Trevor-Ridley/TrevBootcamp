// Write Your Code Below

function equality(x,y) {
    if(x===y) {
        console.log("They are equal in type and value.");
    } else if(x==y) {
        console.log("They are equal in value only.");
    } else {
        console.log("The values are not equal.")
    }
    return;
}

equality(25, 10);

equality(5, 5);

equality('5', 5);

equality('7', 6);

var equalityV2 = function (x,y) {
    if(x===y) {
        console.log("They are equal in type and value.");
    } else if(x==y) {
        console.log("They are equal in value only.");
    } else {
        console.log("The values are not equal.")
    }
    return;
}

equalityV2(10, true);
equalityV2('10', 10);
equalityV2('5', 7);
