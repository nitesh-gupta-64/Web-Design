console.log("Hello world")

const btn = document.querySelector(".btn");

sum = () => {
    const a = parseInt(prompt("Enter a 1st Number: "));
    const b = parseInt(prompt("Enter a 2nd Number: "));
    alert(`Sum = ${a+b}`);

}

changeColour = () => {
    btn.classList.add("active");
}

changeColour1 = () => {
    btn.classList.remove("active");
}