// substringメソッド
const str = "2026-01-02";
const year = str.substring(0,4);
const month = str.substring(5,7);
const day = str.substring(8,10);
const result = year + "/" + month + "/" + day;
document.write(result);


// replaceAllメソッド
document.write("<br>");
const result2 = str.replaceAll("-", "/");
document.write(result2);
