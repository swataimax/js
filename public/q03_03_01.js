const arr = new Array();

// 要素に10, 20, 30, 40, 50, 60 を追加
for (let i = 1; i <= 6; i++) {
    arr.push(i * 10);
}

// 合計を算出
let sum = 0;
for (let e of arr) {
    sum += e;
}

document.write("合計:" + sum + "<br>");
document.write("平均:" + sum / arr.length + "<br>");
