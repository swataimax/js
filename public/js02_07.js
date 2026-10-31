let z = {id:1, name:'山田'};
document.write(z.id + "<br>");
document.write(z.name + "<br>");
z.name = '佐藤';
document.write(z['name']);


console.log(z);			// 
console.log(typeof z);	// object
