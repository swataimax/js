function check() {
    if (document.getElementById("chk").checked) {
        document.getElementById("btn").disabled = false;
    } else {
        document.getElementById("btn").disabled = true;
    }
}
