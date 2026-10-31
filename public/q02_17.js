const points = {英語:85,国語:70,数学:90};

let total = 0;
for (let key in points) {
  total += points[key];
}

document.write("合計点:", total);

