const s = "Hello World";
document.write("元の文字列：" + s + "<br>");
document.write("length：", s.length + "<br>");
document.write("toUpperCase()：", s.toUpperCase() + "<br>");
document.write("indexOf('l')：", s.indexOf("l") + "<br>");
document.write("lastIndexOf('l')：", s.lastIndexOf("l") + "<br>");
document.write("replace：", s.replace("H", "J") + "<br>");
document.write("startsWith：", s.startsWith("H") + "<br>");
document.write("endsWith：", s.endsWith("H"), "<br><hr>");

// スペース除去
const s2 = "   He  llo   "; // 先頭と末尾と文字列の途中にスペースがある
document.write("元の文字列：[" + s2 + "]" + "<br>");
document.write("trim：[", s2.trim(), "]" + "<br>");
document.write("trimStart：[", s2.trimStart(), "]" + "<br>");
document.write("trimStart：[", s2.trimEnd(), "]", "<br><hr>");

// カンマで分割
const s3 = "javascript,is,cool";
const arr = s3.split(",");
document.write("splitで「javascript,is,cool」を分割" + "<br>");
for (let str of arr) {
    document.write(str + "<br>");
}


