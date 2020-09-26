function calculate() {
    // console.log("performing task");

    const elNum1 = document.getElementById("num1");
    const elNum2 = document.getElementById("num2");
    const elop = document.getElementsByName("operator");

    const num1 = Number(document.getElementById("num1").value);

    let operators = document.getElementsByName("operator");
    const num2 = Number(document.getElementById("num2").value);
    const result = document.getElementById("result");
    // console.log(num1);
    // console.log(operators.length);
    // console.log(num2);

    let i = 0;

    while (i < operators.length) {
        // console.log(`index ${i}`)
        if (operators[i].checked) {
            // console.log(operators[i])
            if (operators[i].value === "+") {
                result.innerHTML = num1 + num2;
                break
            } else if (operators[i].value === "-") {
                result.innerHTML = num1 - num2;
                break;
            } else if (operators[i].value === "*") {
                result.innerHTML = num1 * num2;
                break
            } else if (operators[i].value === "/") {
                result.innerHTML = num1 / num2;
                break
            }
        }
        i++;
    }

    let resultText = `${num1}${operators[i].value}${num2}=${result.innerHTML}`;
    console.log(resultText)
    const newElement = document.createElement("LI");
    const childText = document.createTextNode(`${num1}${operators[i].value}${num2}=${result.innerHTML}`);
    newElement.appendChild(childText);
    document.getElementById("MyList").appendChild(newElement);

    if (localStorage.lastOperations === undefined) {
        let list = [];
        list.push(resultText);
        localStorage.setItem("lastOperations", list);
    } else {
        let list = localStorage.lastOperations.split(",");
        list.push(resultText)
        localStorage.setItem("lastOperations", list);
    }

    elNum1.value = '';
    elNum2.value = '';
    operators[0].checked = true;
    result.innerHTML = '';




}

function getFromLocalStorage() {
    let items = localStorage.lastOperations.split(",");
    console.log(items)
    for (const item of items) {
        const newElement = document.createElement("LI");
        const childText = document.createTextNode(item);
        newElement.appendChild(childText);
        document.getElementById("MyList").appendChild(newElement);

    }

}