function convert() {
    let tempInC = prompt("what is your temperature in Celsius?");
    let tempInF = (tempInC * (9 / 5) + 32)
    return tempInF;
}

window.alert("Your temperature in Fahrenheit is " + convert() + ".")