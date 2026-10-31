setInterval("clock()", 1000); // 1秒ごとにclock関数を呼び出す

// 日付をロケール(言語地域環境)に基づいた形式で表示する
function clock() {
    const elem = document.getElementById("d1");
    elem.textContent = new Date().toLocaleString();
}
