function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

document.write(getMax([3, 7, 2, 9, 5]));


document.write("<br>");

const arr = [3, 7, 2, 9, 5];
document.write(getMax(arr));

