//画像情報を取得
const images = document.getElementById('images');

//進む
function forward() {
	images.appendChild(images.children[0]);
}
//戻る
function back() {
	images.insertBefore(
		images.children[images.children.length - 1],
		images.children[0]);
}