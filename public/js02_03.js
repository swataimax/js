let x = 100;  // ここの数値を変更して実行してみよう
if (x % 2 === 0) {
    document.write("<img src='img/dog1.png' width='20%' height='20%'>");
} else {
    document.write("<img src='img/dog2.png' width='20%' height='20%'>");
}

let y = 200;
let z = x >= y ? 'dog3.png' : 'dog4.png';
document.write(`<img src='img/${z}' width='20%' height='20%'>`);

switch (true) {
case x < 100:
    document.write("<img src='img/cat1.png' width='20%' height='20%'>");
    break;
case x >= 100:
    document.write("<img src='img/cat2.png' width='20%' height='20%'>");
    break;
default:
    document.write("<img src='img/cat3.png' width='20%' height='20%'>");
}
