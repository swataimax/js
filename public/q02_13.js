const values = [12, 5, 8, 130, 44];

for (let i = 0; i < values.length; i++) {
  if (values[i] >= 10) {
    document.write(values[i]);
    document.write("<br>");
  }
}

document.write("<br>");

for (let v of values) {
	if (v >= 10) {
		document.write(v);
		document.write("<br>");
	}
}

document.write("<br>");

values.forEach(function(x) {
	if (x >= 10) {
		document.write(x);
		document.write("<br>");
	}
});

document.write("<br>");

let func1 = function(x) {
	if (x >= 10) {
		document.write(x);
		document.write("<br>");
	}
};
values.forEach(func1);

document.write("<br>");

let func2 = (x) => {
	if (x >= 10) {
		document.write(x);
		document.write("<br>");
	}
};
values.forEach(func2);

document.write("<br>");

values.forEach((x) => {
	if (x >= 10) {
		document.write(x);
		document.write("<br>");
	}
});


