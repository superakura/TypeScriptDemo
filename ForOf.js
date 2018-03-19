//TypeScript新的循环语法，跟forEach、for in进行比较
var arrayForOf = [1, 2, 3, 4, 5, 6];
// arrayForOf.desc = "this is array";
//使用forEach函数，中间不能break，不能输出属性
arrayForOf.forEach(function (value) { return console.log(value); });
//使用for in 循环，能输出属性
for (var key in arrayForOf) {
    console.log("key is " + key);
    console.log("value is " + arrayForOf[key]);
}
//for of循环，中间能跳出循环
for (var _i = 0, arrayForOf_1 = arrayForOf; _i < arrayForOf_1.length; _i++) {
    var n = arrayForOf_1[_i];
    if (n > 4) {
        break;
    }
    ;
    console.log(n);
}
//for of循环还能用于对象、字符串等等
for (var _a = 0, _b = "hello,world!"; _a < _b.length; _a++) {
    var s = _b[_a];
    console.log(s);
}
//# sourceMappingURL=ForOf.js.map