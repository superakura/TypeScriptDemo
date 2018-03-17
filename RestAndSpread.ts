//第一种用法：restAndSpread操作符用来声明任意数量的方法参数
//...就是restAndSpread操作符
function func1(...args) {
    args.forEach(function (args) {
        console.log(args)
    });
};

func1(1,2,3);
func1("x","y","z");

//第二种用法，把任意长度的数组转化为函数的参数
function func2(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
};

var args1=[1,2];
var args2=[6,7,8,9,10];

//typescript编译器会报错，因为采用了ES6标准，但生成的js代码没有问题
// func2(...args1);
// func2(...args2);