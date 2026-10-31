function choice() {
    if (document.myform.r1[0].checked) { // 犬が選択されている場合
        document.myform.i1.value = "犬を選択";
    }
    if (document.myform.r1[1].checked) { // 猫が選択されている場合
        document.myform.i1.value = "猫を選択";
    }
}

function back(obj) {
    // 背景色に引数の要素のvalue属性の値を設定する
    document.body.style.backgroundColor = obj.value;
}
