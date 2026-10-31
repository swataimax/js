function change() {
    // img要素のコレクション　対象HTML文書のすべての画像を取得する
    const x = document.images;
    for (let i = 0; i < x.length; i++) {
        x[i].width += 10; // 画像サイズをプラス10する
    }
}
