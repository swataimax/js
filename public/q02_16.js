const product = {"りんご": 120,"バナナ": 80,"みかん": 100};

for (let item in product) {
  document.write(`${item} の価格は ${product[item]} 円`);
  //document.write(item, "の価格は", product[item],"円");
  document.write("<br>");
}

document.write("<br>");

for (let item in product) {
  document.write(item, "の価格は ", product[item],"円");
  document.write("<br>");
}
