const set = new Set(["apple", "orange", "banana", "apple"]);

// このような記述もできる（メソッドチェーン）
//const set = new Set();
//set.add("apple")
//    .add("orange")
//    .add("banana")
//    .add("apple");

// for of
for (const s of set.values()) {
    document.write(s + "<br>");
}

document.write("<br>");

// foreach
set.forEach(function(value) {
    document.write(value + "<br>");
})
