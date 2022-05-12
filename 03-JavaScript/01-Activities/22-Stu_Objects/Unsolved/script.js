//WRITE YOUR CODE BELOW

var customerOrder1 = {
    name: 'Vanilla Latte',
    sugars: 3,
    ready: true
};

var customerOrder2 = {
    name: 'Mocha Cappuccino',
    sugars: 1,
    ready: false
};

function isOrderReady(x) {
    if (x["ready"] === false) {
        console.log("Still in order queue.");
    } else {
        console.log("Ready for pick-up.");
    }
return;
}

isOrderReady(customerOrder1);
isOrderReady(customerOrder2);