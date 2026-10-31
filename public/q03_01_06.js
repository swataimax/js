const str = "1,山田,東京" + "<br>"
            + "2,佐藤,神奈川" + "<br>"
            + "3,田中,埼玉";
// <br>(改行)をカンマ(,)に置換後、カンマ(,)で分割する
const arr = str.replaceAll("<br>", ",").split(",");
let index = 0;
for (const s of arr) {
    if (index % 3 === 0) {
        document.write("ID：" + s + "<br>");
    } else if (index % 3 === 1) {
        document.write("名前：" + s + "<br>");
    } else {
        document.write("住所：" + s + "<br><br>");
    }
    index++;
}
