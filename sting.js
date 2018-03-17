var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var content = "aaa\nbbb\naaa";
var myName = "gaoyuan";
var getName = function () {
    return "ppx";
};
console.log("user name is " + myName + ",hello " + getName());
//自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.info(age);
}
;
var getAge = function () {
    return 30;
};
test(__makeTemplateObject(["wo shi yi ge ppx ", " casio gwg1000 ", " logitecth"], ["wo shi yi ge ppx ", " casio gwg1000 ", " logitecth"]), myName, getAge());
//# sourceMappingURL=sting.js.map