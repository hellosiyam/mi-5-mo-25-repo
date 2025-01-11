// Option - 1: Direct in line ;

// Option - 2 :
function option2() {
        document.body.style.backgroundColor = "yellow"
    }
// Option - 2 Recap :
function option2Recap() {
    document.body.style.backgroundColor = 'brown'
}

// Option - 3 :
const Option3 = document.getElementById("option-3")
Option3.onclick = option3;
function option3() {
    document.body.style.backgroundColor = 'orange'
}

// Option - 3 Recap:
const Option5o = document.getElementById("option-3.5");
Option5o.onclick = option5o; 
function option5o() {
    document.body.style.backgroundColor = 'purple'
}

// Option - 3.1 :
const Option3o = document.getElementById("option-3.1");
Option3o.onclick = function option3o() {
    document.body.style.backgroundColor = 'green'
}