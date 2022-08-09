function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOk() {
    alert("Are you agree.")
}

function showCancel() {
    alert("Are you cancel.")
}

ask("Are you agree?", showOk, showCancel)

// arrows function
let sum = (a, b) => a + b;

alert(sum(1, 2))

//arrow function change
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
);

//prompt alert 
let userName = prompt("Your name ", "Alisa")
let isTeaWanted = confirm("Would you like coffee?")

alert("guest : " + userName);
alert("Coffee" + isTeaWanted)