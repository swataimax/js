const date1 = new Date(2026, 0, 2);
const fmt = new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
//	month: "numeric",
    day: "2-digit",
});
document.write(fmt.format(date1) + "<br>");

let date2 = new Date();
let yyyy = date2.getFullYear(); // 西暦
let mm = date2.getMonth() + 1;  // 月（1月は0のため+1する）
let dd = date2.getDate(); // 日を取得
let weekday = date2.getDay();   // 曜日（数値で取得される）

// 月と日が1桁の場合は先頭に0をつける（ゼロパディング）
if (mm < 10) {
    mm = "0" + mm;
}
if (dd < 10) {
    dd = "0" + dd;
}

// 曜日配列
const week = ["日", "月", "火", "水", "木", "金", "土"];  

const result = yyyy + "年" + mm + "月" + dd + "日"
				+ "(" + week[weekday] + ")"; 
document.write(result);

