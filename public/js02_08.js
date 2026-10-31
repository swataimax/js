let fruits = {apple:100, orange:80, banana:150};
for (let key in fruits) {
    document.write(key + "=" + fruits[key]);
    // 上述以外に、こちらの書き方でもよい
    //document.write(`${key}=${fruits[key]}`); 
    document.write("<br>");
}
