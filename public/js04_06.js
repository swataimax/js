let win = null;  // ウィンドウの開閉を判定する変数
function windowOpen() {
    if (win == null) {  // ウィンドウが閉じている場合
        win = window.open("https://www.yahoo.co.jp/	", "",
            "width='800', height='500', menubar=no");
    }
}
function windowClose() {
    if (win) {  // ウィンドウが開いている場合
        win.close();
        win = null;
    }
}
