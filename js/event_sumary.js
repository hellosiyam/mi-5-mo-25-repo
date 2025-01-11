function onClickHendel() {
    const onclick = document.getElementById('handeler-status');
    onclick.innerText = "Text Change by using Function";
}

document.getElementById('docoment_Hendeler').addEventListener('click', function 
() {
    const getElement = document.getElementById('handeler-status');
    getElement.innerText = "This Text Replace by document Id"
})