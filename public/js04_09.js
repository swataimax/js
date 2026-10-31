function display() {
    let elem = document.getElementById("i1");
    if (elem.style.visibility == "visible") { // 表示の場合
        elem.style.visibility = "hidden";
    } else {
        elem.style.visibility = "visible";
    }
}
