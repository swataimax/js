// 関数リテラルの定義
let minus = function(c, d) {
    return c - d;
};
document.write(minus(10, 1), "<br>");

// アロー関数の定義
let multipl = (x, y) => {
    return x * y;
};
document.write(multipl(2, 3), "<br>");


//（参考）アロー関数の省略記法


const foo = (msg)=> {
    console.log(msg);
}
foo('メッセージ出力');


const foo2 = msg => {
    console.log(msg);
}
foo2('メッセージ出力');


const foo3 = ()=> {
    console.log('test');
}
foo3(10);


const foo4 = n => {
	return n * n;
}
console.log(foo4(10));

const foo5 = n =>  n * n;
console.log(foo5(10));

