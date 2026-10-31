// 文字列のため、シングルクォーテーションで囲む
// ダブルクォーテーションはJSONデータで使用するので囲むのに使えない
const text = '{"id" :1, "name" :"yamada"}';

// JSONに変換
const value = JSON.parse(text);
//console.log(value)
//console.log(typeof value);	// object

// 画面に表示
document.write("parse：" + value + "<br>"); 

// デベロッパーツールのコンソールに表示
console.log('parse：'); 
//console.log(value);	// string

// オブジェクトに変換
const restore = JSON.stringify(value);
console.log(typeof restore);

// 画面に表示
document.write("stringify：" + restore + "<br>");

// デベロッパーツールのコンソールに表示
console.log('stringify：');
console.log(restore);

//for (let key in restore) {
//	document.writeln(key); // + ":" + restore[key]);
//}

