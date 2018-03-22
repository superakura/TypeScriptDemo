var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类的使用和定义，成员的访问控制符，构造函数的用法。
var PersonForClass = /** @class */ (function () {
    //定义构造函数
    function PersonForClass(name) {
        this.Name = name; //通过构造函数限制创建person实例的时候必须指定name
    }
    PersonForClass.prototype.eat = function () {
        console.log(this.Name + " is eating!!!");
    };
    return PersonForClass;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    //重写子类的构造函数，创建员工的时候，必须指定姓名和员工编号。
    function Employee(name, code) {
        return _super.call(this, name) || this;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.dowork();
    };
    //dowork方法设置为私有，防止实例直接调用dowork方法，应让员工先执行eat方法吃完饭后，在执行dowork方法。
    //避免绕过eat方法，不吃饭，直接调用dowork方法。
    Employee.prototype.dowork = function () {
        console.log("employee" + this.code + " is do work");
    };
    return Employee;
}(PersonForClass));
var p1 = new PersonForClass("bill");
var p2 = new PersonForClass("trumpe");
p1.eat();
p2.eat();
var e1 = new Employee("gy", "00091695");
e1.work();
//泛型,定义特定类型的集合
var personArray = [];
personArray[0] = new PersonForClass("xjp");
personArray[1] = new Employee("liq", "001");
personArray[1].eat();
//# sourceMappingURL=class.js.map