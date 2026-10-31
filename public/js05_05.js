function mulitiChoice() {
    let r = "";
    if (document.getElementById("c1").checked) {
        // 犬が選択されたときは変数に文言を設定
        r = "犬";
    }
    if (document.getElementById("c2").checked) {
        // 猫が選択されたときは変数に文言を追記
        r += " 猫"
    }
    // divタグのにextContentに値を設定する
    document.getElementById("d1").textContent = r;
}
