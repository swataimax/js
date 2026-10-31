const map = new Map();
map.set(1, "山田");
map.set(2, "佐藤");
map.set(3, "田中");
map.set(2, "加藤"); // 同一キーで上書き
map.set("A", "AAA");

// このような記述もできる（メソッドチェーン）
//map.set(1, "山田")
//    .set(2, "佐藤")
//    .set(3, "田中")
//    .set(2, "加藤");

document.write("map.size：" + map.size + "<br>");
document.write("map.get(2)：" + map.get(2) + "<br>");
document.write("map.get(4)：" + map.get(4) + "<br><hr>");

// キー一覧
for (const k of map.keys()) {
    document.write(k + "<br>");
}
document.write("<br>");

// 値一覧
for (const v of map.values()) {
    document.write(v + "<br>");
}
document.write("<hr>");

const map2 = new Map([
    ["apple", 120],
    ["orange", 100]
]);

// for of
for (const m of map2.entries()) {
    document.write(m + "<br>");
}

// foreach
document.write("<br>");
map2.forEach(function(value, key) {
    document.write(key + ", " + value +"<br>");
});


// for in は使えない
document.write("<br>");
for (let key in map) {
    document.write(key + "<br>");
}

