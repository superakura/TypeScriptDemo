//类的使用和定义，成员的访问控制符，构造函数的用法。
class PersonForClass {
    //定义构造函数
    constructor(name: string) {
        this.Name = name;//通过构造函数限制创建person实例的时候必须指定name
    }

    public Name: string;//类的内部、外部、子类都能访问。
    protected dna: number;//类的内部、子类能访问。
    private heat: string;//类的内部能访问。

    public eat() {
        console.log(this.Name + " is eating!!!");
    }
}

class Employee extends PersonForClass {
    public code: string;
    //重写子类的构造函数，创建员工的时候，必须指定姓名和员工编号。
    constructor(name: string, code: string) {
        super(name);//子类的构造函数，必须调用父类的构造函数。
    }
    public work() {
        super.eat();
        this.dowork();
    }
    //dowork方法设置为私有，防止实例直接调用dowork方法，应让员工先执行eat方法吃完饭后，在执行dowork方法。
    //避免绕过eat方法，不吃饭，直接调用dowork方法。
    private dowork() {
        console.log("employee"+this.code+" is do work");
    }
}

var p1 = new PersonForClass("bill");
var p2 = new PersonForClass("trumpe");

p1.eat();
p2.eat();

var e1=new Employee("gy","00091695");
e1.work();

//泛型,定义特定类型的集合
var personArray:Array<PersonForClass>=[];
personArray[0]=new PersonForClass("xjp");
personArray[1]=new Employee("liq","001");

personArray[1].eat();