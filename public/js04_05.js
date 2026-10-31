// 確認ボタンクリック時
function select() {
    const elem = document.getElementById("d1");
    if (confirm("よろしいですか？")) { // 「はい」選択時
        elem.innerHTML = "<i>yes</i>";
    } else {  // 「いいえ」選択時
        elem.innerHTML = "<i>no</i>";
    }
}
// 入力ボタンクリック時
function input() {
    const elem = document.getElementById("d1");
    const name = prompt("名前を入力してください", "");
    elem.textContent = name + "さん、こんにちは";
}
