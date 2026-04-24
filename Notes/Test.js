function add(a, b) {
    console.log("Adding " + a + " and " + b + " gives " + (a + b));
}

let addition = (a,b) => {
    console.log("Adding using Arrow function: " + a + " and " + b + " gives " + (a + b));
}

add(5, 10);
addition(15, 10);