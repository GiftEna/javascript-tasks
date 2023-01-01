const elements = ["cat", "dog", "house", "waterbottle", "things"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const personObject = { name: "jane", age: 23, };
const thingyObject = { country: "germany", place: " Munich", housecolor: "blue", number: "45" }

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

//printArray(numbers);

function isEven(number) {
    if (number % 2 == 0) {
        console.log("True");
        return true;
    } else {
        console.log("False");
        return false;
    }
}

//isEven(3);

function addArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }

    return sum;
}

//console.log(addArray(numbers));

function concatenate(first_string, second_string) {
    return first_string + " " + second_string;

}

//console.log(concatenate("Hello", "World"));


function javascriptIsFun(n) {
    let i = 0;
    while (i < n) {
        console.log("Javascript is fun");
        i++;
    }
}

//javascriptIsFun(4);

function power(a, b) {
    let sum = 0;
    let i = 0;
    while (i < b) {
        sum += a * a;
        i++;
    }
    return sum
}

//console.log(power(2, 4))

function lastDigit(n) {
    while (n >= 10) {
        return (n % 10);
    }
}
//console.log(lastDigit(1303839)

//console.log(personObject.name);

function printValues(obj) {
    console.log(Object.values(obj));
}

//printValues(personObject);

function printKeys(obj) {
    console.log(Object.keys(obj));
}

//printKeys(personObject);

function fizzBuzz() {
    let finalString = "";
    for (let i = 1; i <= 100; i++) {
        // console.log(i);
        if (i % 3 == 0 && i % 5 == 0) {
            // console.log("FizzBuzz");
            finalString += "FizzBuzz, ";
            continue;
        }

        if ( i % 3 == 0) {
            // console.log("Fizz");
            finalString += "Fizz, ";
        } else if (i % 5 == 0){
            finalString += "Buzz, ";
            //console.log("Buzz");
        } else {
            finalString += i + ", ";
            //console.log(i);
        }
    }

    let slice = finalString.slice(0, finalString.length - 2);

    console.log(slice);
}

//fizzBuzz()

