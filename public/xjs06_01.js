// 画像情報を取得
const images = document.getElementById('images');

//console.log(images.tagName);
//console.log(images.childElementCount);
//console.log(images.firstElementChild.tagName);
//console.log(images.lastElementChild.tagName);
//console.log(images.parentElement.tagName);
//console.log(images.firstElementChild.src);
//console.log(images.lastElementChild.src);

// 進む
function forward() {
	images.appendChild(images.children[0]);
	
	console.log(images.firstElementChild.src);
}

// 戻る
function back() {
	images.insertBefore(
		images.children[images.children.length - 1],
		images.children[0]);
	console.log(images.firstElementChild.src);
}

