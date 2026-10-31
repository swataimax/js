// ボタン表示切替
let img = document.getElementById('img');

// ボタン画像にマウスを重ねたときの処理
img.addEventListener('mouseenter', function() {
    this.src = "img/regist_button2.png"; // 淡いグレーのボタン
});

// ボタン画像からマウスを離したときの処理
img.addEventListener('mouseleave', function() {
    this.src = "img/regist_button1.png"; // 濃いグレーのボタン
});
