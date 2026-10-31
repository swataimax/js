const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  document.write(numbers[i] * 2 + " ");
}

document.write("<br>");

for (let n of numbers) {
	document.write(n * 2 + " ");
}

document.write("<br>");

numbers.forEach(function(n) {
	document.write(n * 2 + " ");
});

document.write("<br>");

numbers.forEach((n) => {
	document.write(n * 2 + " ");
});

document.write("<br>");

numbers.forEach(n => document.write(n * 2 + " "));


