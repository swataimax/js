function hello() {
    document.write("こんにちは");
}
hello();
document.write("<br>");

function add(a, b) {
    const c = a + b
    document.write(c);
}
add(1, 2);
document.write("<br>");
function hello2() {
    return "Hello";
}
let str = hello2();
document.write(str + "<br>");

function triangle(base, height) {
    if (base <= 0 || height <= 0) {
        return;
    } else {
        return base * height / 2;
    }
}
// 引数に0を設定すると、undefinedになる
document.write(triangle(2, 3));
//document.write(triangle(0, 3));

