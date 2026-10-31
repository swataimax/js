document.write("<table border='1'>");
for (let i= 0; i < 2; i++) {
    document.write("<tr>");
    for (let j = 1; j <=4; j++) {
        document.write(
			`<td><img src='img/${i * 4 + j}.png' width='20%' height='20%'></td>`
		); // テンプレート文字列
    }
    document.write("</tr>");
}
document.write("</table");
