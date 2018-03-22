//接口的用法，主要有两种。
//1、作为方法的参数，限制方法参数的类型。
//2、限制类定义方法的实现。
var PersonForInterface = /** @class */ (function () {
    //定义一个成员，类型为IPerson，作为构造函数的参数。
    function PersonForInterface(person) {
        this.person = person;
        console.log(person);
    }
    return PersonForInterface;
}());
//实例化对象的时候，必须传递一个符合接口定义规范的类型（为一个对象）。
var pInterface = new PersonForInterface({ "name": "xm", "age": 12 });
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log("i eat meat!");
    };
    return Tiger;
}());
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log("i eat grass");
    };
    return Sheep;
}());
var tiger = new Tiger();
tiger.eat();
var sheep = new Sheep();
sheep.eat();
//# sourceMappingURL=Interface.js.map