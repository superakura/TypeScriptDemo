var myName = "gaoyuan";
var myAge = 30;
var mySex = true;
//函数可以设置返回值类型，return的类型必须匹配，函数的参数也可以设置类型
function myPay(mongy) {
    return mongy + 100;
}
;
console.log(myPay(300));
//自定义类型
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var xiaoming = new Person();
xiaoming.pName = "xiaoming";
xiaoming.pAge = 12;
console.log(xiaoming);
//函数的参数可以设定默认值，默认值要放在最后
//在参数后加？，则参数为可选参数，不能放到必选参数前面
//可选参数，要注意处理没有传递参数的特殊情况，比如b.length
function testType(a, b, c) {
    if (c === void 0) { c = "wuying"; }
    console.log("this is " + a + " next is " + b + " third is " + c);
}
//调用函数时，有默认值的参数可以省略
testType("gaoyuan", "gaohongbo"); //调用带默认参数
testType("gy"); //调用可选参数、默认参数
testType("gaoyuan", "gaohongbo", "gaobaosheng");
//# sourceMappingURL=type.js.map