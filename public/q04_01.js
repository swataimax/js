let tm;
// 開始
function start() {
    // 1秒ごとにgetTime関数を呼び出す
    tm = setInterval("getTime()", 1000);
}
// 時間表示
function getTime() {
    const elem = document.getElementById("d1");
    elem.textContent = new Date().toLocaleTimeString();
}
// 停止
function stop() {
    clearInterval(tm);
}
