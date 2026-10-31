function display() {
    const list = document.getElementsByTagName("a");
    const elem1 = document.getElementById("d1");
    let text = "";
    for (let i = 0; i < list.length; i++) {
        // 各aタグのhref属性の値を取得する
        text += list.item(i).href + "<br>";
    }
    // brタグを描画するため、innerHTMLを使用してdivタグに表示する
    elem1.innerHTML = text;
}
