const tabs = document.querySelectorAll('.tab'); // タブ情報
const contents = document.querySelectorAll('.content'); // コンテンツ情報

tabs.forEach((tab, i) => {
	tab.addEventListener('click', () => {	//「i」はタブのインデックス(今回は0,1,2となる)
		// タブからactiveを削除する
		tabs.forEach(tab => tab.classList.remove('active'));

		// コンテンツからactiveを削除する
		contents.forEach(content => content.classList.remove('active'));
		// ↑classList…要素にclass属性を追加したり削除できるプロパティ
		
		// クリックしたタブをactiveにする
		tab.classList.add('active');

		// クリックしたタブに紐づくコンテンツをactiveにする
		contents[i].classList.add('active');
	});
});


// array.forEach((value, index, array) => {
// 	// 繰り返し処理
// });
// value: 現在の要素の値。
// index: 現在の要素のインデックス（省略可能）。
// array: 元の配列全体（省略可能）。

