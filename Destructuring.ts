//destructuring 析构表达式
//通过对象表达式将【数组】或【对象】拆分成任意数量的变量

//从对象里面拆分变量
function getStock() {
    return  {
        code:"600031",
        price:"18" ,
        priceRange:{
            max:25,
            min:14
        }
    };
};

//传统js写法
// var stock=getStock();
// var code=stock.code;
// var price=stock.price;

//析构表达式写法
var {code,price}=getStock();

console.log(code);
console.log(price);

//通过变量名：别名，可以给对象的属性起一个别名。
var {code:codeAs,price:priceAs}=getStock();
console.log(codeAs);
console.log(priceAs);

//通过嵌套析构表达式，可以取得嵌套的对象中的值
var {priceRange:{max}}=getStock();
console.log(max);

//拆分数组中的值
var myArray=[1,2,3,4];
var [num1,,num3,]=myArray;
var [num1,,...others]=myArray;
console.log(num1);
console.log(num3);
console.log(others);

function doSomething([num1,,...others]) {
    console.log(others);
};
doSomething(myArray);