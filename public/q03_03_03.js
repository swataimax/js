const src = new Array(1, "2", "3", 4, 5, "6");
const dst = new Array();

for (let e of src) {
    // 要素の値がnumber型か判定
    if (typeof e === "number") {
        // number型(数値型)であれば追加
        dst.push(e);
    }
}

for (let e of dst) {
    document.write(e + "<br>");
}
