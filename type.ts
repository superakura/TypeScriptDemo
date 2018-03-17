var myName:string="gaoyuan";

var myAge:number=30;

var mySex:boolean=true;

//函数可以设置返回值类型，return的类型必须匹配，函数的参数也可以设置类型
function myPay(mongy:number):number {
    return mongy+100;
};

console.log(myPay(300));

//自定义类型
class Person{
    pName:string;
    pAge:number;
}

var xiaoming=new Person();
xiaoming.pName="xiaoming";
xiaoming.pAge=12;

console.log(xiaoming);

//函数的参数可以设定默认值，默认值要放在最后
//在参数后加？，则参数为可选参数，不能放到必选参数前面
//可选参数，要注意处理没有传递参数的特殊情况，比如b.length
//可选参数输出为undefined 
function testType(a:string,b?:string,c:string="wuying") {
    console.log(`this is ${a} next is ${b} third is ${c}`);
}

testType("gaoyuan","gaohongbo");//调用默认参数，有默认值的参数可以省略
testType("gy");//调用可选参数、默认参数
testType("gaoyuan","gaohongbo","gaobaosheng");