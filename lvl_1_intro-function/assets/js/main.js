console.log("it works");

// ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
// __________ 1-1_intro-functions ____________

function intro () {
    console.log("Hello World!");
    console.log(a + result);
}

let a = ("1+3 = ");
let result = 1+3;

intro();

// __________ 1-2_intro-functions ____________

function intro2 (paramName) {
    let varName = "SuperCoder";
    console.log("Hi " + varName + ". Mein Name ist " + paramName + " !");
}

intro2 ("Jens");

// __________ 1-3_intro-functions ____________

function intro3 (name , stadt , alter){
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich wohne in " + stadt + "!");
}

intro3("Jens" , "Berlin" , 35);

// __________ 1-5_intro-functions ____________

function math (wert1 , wert2) {
    console.log( x + wert1 * wert2);
    console.log( y + wert1 / wert2);
}

let x = ("Multiplikation: ");
let y = ("Division: ");

math (10 , 2);
math (30 , 20);
math (100 , 100);
math (5 , 0);
math (45 , 173);
math (1 , 1000);

