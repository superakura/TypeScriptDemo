import { moduleFuncA, moduleVarA, moduleClassA } from "./ModuleA";

moduleFuncA("gaoyuan");

console.log(moduleVarA);

var classA=new moduleClassA();

classA.test();