// Option - 1;
function onClickHendel() {
    const onclick = document.getElementById('handeler-status');
    onclick.innerText = "Text Change by using Function";
}

// Option - 2;
document.getElementById('docoment_Hendeler').addEventListener('click', function 
() {
    const getElement = document.getElementById('handeler-status');
    getElement.innerText = "This Text Replace by document Id"
})

// Option - 3;
document.getElementById('Update').addEventListener('click', function() {
    const input = document.getElementById('inputArea');
    const inputText = input.value;

    const p = document.getElementById('text');
    p.innerText = inputText;
    input.value = '';
})