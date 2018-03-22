//接口的用法，主要有两种。
//1、作为方法的参数，限制方法参数的类型。
//2、限制类定义方法的实现。

//1、作为方法的参数
interface IPerson {
    name: string;
    age: number;
}

class PersonForInterface {
    //定义一个成员，类型为IPerson，作为构造函数的参数。
    constructor(public person: IPerson) {
        console.log(person);
    }
}
//实例化对象的时候，必须传递一个符合接口定义规范的类型（为一个对象）。
var pInterface = new PersonForInterface({ "name": "xm", "age": 12 });


//2、限定类必须实现的方法。
interface IAnimal {
    eat();
}

class Tiger implements IAnimal {
    eat() {
        console.log("i eat meat!");
    }
}

class Sheep implements IAnimal {
    eat() {
        console.log("i eat grass");
    }
}

var tiger=new Tiger();
tiger.eat();

var sheep=new Sheep();
sheep.eat();