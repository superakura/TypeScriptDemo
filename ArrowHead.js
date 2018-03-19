//用来声明匿名函数，用于消除传统匿名函数的this指针问题
//1、只有一行的情况
var sumA = function (arg1, arg2) { return arg1 + arg2; };
//2、有换行的情况情况,需要括号和return
var sumB = function (arg1, arg2) {
    return arg1 + arg2;
};
//3、只有一个参数的情况,参数的括号可以不用写
var sumC = function (arg) {
    console.log(arg);
};
//4、没有参数的情况，只写一个括号，声明一个没有参数的匿名方法
var sumD = function () {
};
//5、通过匿名函数表达式，输出数组中的偶数
var myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray.filter(function (value) { return value % 2 == 0; }));
//6、消除this指针的影响
//使用传统js方式定义，this可能出现问题
function getStockThis(name) {
    this.name = name;
    setInterval(function () {
        console.log("name is " + this.name);
    }, 5000);
}
var stockThis = new getStockThis("600028");
//使用ArrowHead表达式，消除this的问题
function getStockArrow(name) {
    var _this = this;
    this.name = name;
    setInterval(function () {
        console.log("name is " + _this.name);
    }, 5000);
}
var stockArrow = new getStockArrow("600028");
//# sourceMappingURL=ArrowHead.js.map