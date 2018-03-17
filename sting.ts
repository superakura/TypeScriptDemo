var content=`aaa
bbb
aaa`;

var myName="gaoyuan";

var getName=function(){
    return "ppx";
};

console.log(`user name is ${myName},hello ${getName()}`);

//自动拆分字符串
function test(template,name,age) {
    console.log(template);
    console.log(name);
    console.info(age);
};

var getAge=function(){
    return  30;
};

test`wo shi yi ge ppx ${myName} casio gwg1000 ${getAge()} logitecth`;