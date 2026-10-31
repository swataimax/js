const text = "HelloWorld";
let map = new Map();
for (let c of text) {
    let count = 0; // 文字の登場回数を数える変数
    if (map.has(c)) { // 既に登場済みの文字か判定
        count = map.get(c) + 1;
    } else {
        count = 1;
    }
    map.set(c, count); // キー：文字、値：登場回数
}
document.write("テキスト：" + text + "<br>");

for(let k of map.keys()) {
    document.write(k + "：" +  map.get(k) + "　");
}


document.write("<br>")
document.write("<br>")

for (let c of text) {
	document.write(c, " ", typeof c, "<br>");
}

// text も反復可能なオブジェクトで、for of が使える
