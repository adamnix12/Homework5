function calculate() {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const operation = document.getElementById("operations").value;

    switch (operation) {
        case "add":
            return number1 + number2;

        case "subtract":
            return number1 - number2;

        case "multiply":
            return number1 * number2;

        case "divide":
            return number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
    }
}

function handleSubmit(event) {
    event.preventDefault();

    document.querySelector(".box").innerHTML = calculate();
}