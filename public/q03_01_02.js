const str = "Hello World";

//const word = "or"; // 「zzz」に変更して実施すること
const word = "zzz"; // 「zzz」に変更して実施すること

document.write("検索ワード：" + word + "<br>");
const index = str.indexOf(word);
if (index > 0) {
    document.write(word + "：" + index + "番目で見つかりました");
} else {
    document.write(word + "は見つかりませんでした");
}
