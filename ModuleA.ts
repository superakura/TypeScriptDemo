export var moduleVarA: string = "hello,module";
var moduleVarB: string = "xxx";

export function moduleFuncA(name: string) {
    console.log("test,module func " + name);
}

function moduleFuncB(name: string) {
    console.log("bbb");
}

export class moduleClassA {
    public test() {
        console.log("test");
    }
}

class moduleClassB {

}