function change() {
    const x = 'abcdefg';
    const elem1 = document.getElementById("p1");
    elem1.textContent = "<i>" + x +"</i>"
    const elem2 = document.getElementById("p2");
    elem2.innerHTML = "<i>" + x +"</i>";
}
