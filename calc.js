// alert(connected);

function add(){
    console.log("+ clicked")
}

function subtract(){
    console.log("- clicked")
}

function multiply(){
    console.log("* clicked")
}

function divide(){
    console.log("/ clicked")
}

function clear(){
    console.log("Clear clicked")
}

function result(){
    // verify that the code is connected
    //console.log("= clicked")
    //getting the numbers from the input boxes
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
   
    //if statement for when addition operation is selected
    let result = num1 + num2
    console.log("num1 is " + num1)

    //if statement for when subtraction operation is selected
    let result = num1 - num2
    console.log("num1 is " + num1)

    //if statement for when multiplication operation is selected
    let result = num1 * num2
    console.log("num1 is " + num1)

    //if statement for when division operation is selected
    let result = num1 / num2
    console.log("num1 is " + num1)
}