const arr = new Array(30, 20, 50, 10, 40);
let max = arr[0];
let min = arr[0];

for (let i = 1; i < arr.length; i++) {
    // 最大値を算出
    if (max < arr[i]) {
        max = arr[i]
    }
    // 最小値を算出
    if (min > arr[i]) {
        min = arr[i]
    }
}
document.write("最大値:" + max + "<br>");
document.write("最小値:" + min + "<br>");
