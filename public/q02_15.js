const book = {title: "JavaScript入門", author: "山田太郎", pages: 200};

book.pages = 250;

document.write("タイトル:", book.title,"<br>");
document.write("著者:", book.author,"<br>");
document.write("ページ数:", book.pages,"<br>");

document.write("<br>");

for (let key in book) {
	document.write(key + ":" + book[key], "<br>");
}



