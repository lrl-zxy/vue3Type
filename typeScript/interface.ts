// 对对象的形状进行描述
// interface  第一个字母最好大写 
interface Person{
    name: string;
    age:number;
}
let viking:Person = {
    name:'viking',
    age:20
}
//属性后面加上？代表这个属性可以存在也可以不存在
interface Person1{
    name: string;
    age?:number;
}
// 因为age是可选可不选的  所以删除掉age属性也不会报错
let viking1:Person1 = {
    name:'viking',
}
//只读属性
interface Person2{
    readonly id:number;
    name: string;
    age:number;
}
let viking2:Person2 = {
    id:1,
    name:'viking',
    age:20
}
//因为 Person2的id是只读属性 所以不能修改id
viking2.id = 2