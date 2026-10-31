const list = new Array(30, 40, 20, 10, 50);
list.sort();
document.write(list, "<br>");

// 要素を昇順に並び替える
list.sort(function(x, y){
    return x - y; // 昇順
});
document.write(list, "<br>");

// 要素を降順に並び替える
list.sort(function(x, y){
    return y- x; // 降順
});
document.write(list, "<br>");

// 要素を2倍して表示する
list.forEach(function(x) {
    document.write(x * 2, ",");
});

// 要素を2乗する
let m = list.map(function(x) {
    return x * x
});
document.write("<br>", m);
