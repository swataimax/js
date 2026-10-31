function calc() {
    // 対象のid属性の要素の値(＝入力値)を取得
    const x1 = parseInt(document.getElementById("f1").value);
    const x2 = parseInt(document.getElementById("f2").value);
    document.getElementById("f3").value = x1 + x2;
}
