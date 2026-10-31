function calc() {
    // formタグ内のinputタグのvalue属性の値(＝入力値)を取得
    const x1 = parseInt(document.myform.f1.value);
    const x2 = parseInt(document.myform.f2.value);
    document.myform.f3.value = x1 + x2;
}
