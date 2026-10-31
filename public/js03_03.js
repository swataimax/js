document.write("Number.MAX_VALUE：", Number.MAX_VALUE + "<br>");
document.write("Number.MIN_VALUE：", Number.MIN_VALUE + "<br>");

const x = 3.14;
document.write(x + "：" + typeof x + "<br>");
document.write(x.toString() + "：" + typeof x.toString() + "<br>");

// 浮動小数点数の誤差が発生する
const y = Number.parseInt("1") + Number.parseFloat("3.14");
document.write("誤差あり：" + y + "<br>");

// 対応策(小数を整数にしてから、小数に戻す)
const z1 = Number.parseInt("1");
const z2 = Number.parseFloat("3.14");
const z3 = ((z1 * 100) + (z2 * 100)) / 100;
document.write("誤差なし：" + z3 + "<br>");
