// Option - 1: Direct in line ;
{/* <button onclick="document.body.style.backgroundColor ='red' ">In Line Click</button> */}

// Option - 2 :
function option2() {
        document.body.style.backgroundColor = "yellow"
    }

// Option - 3 :
const Option3 = document.getElementById("option-3")
Option3.onclick = option3;
function option3() {
    document.body.style.backgroundColor = 'orange'
}

// Option - 3.1 :
const Option3o = document.getElementById("option-3.1");
Option3o.onclick = function option3o() {
    document.body.style.backgroundColor = 'green'
}

// Option - 4 :
const Option4 = document.getElementById("option-4");
Option4.addEventListener('click',option4 );
function option4() {
    document.body.style.backgroundColor = "blue"
}

// Option - 4.1 :
const Option4_1 = document.getElementById("option-4.1");
Option4_1.addEventListener('click', function option4_1() {
    document.body.style.backgroundColor = "goldenrod"
})

// Option - 4.2 :
document.getElementById('option-4.2').addEventListener('click', function option4_2() {
    document.body.style.backgroundColor = "tomato"
})