//type就相当于类型别名
type StrOrNumber = string | number;
let result3: StrOrNumber = '123'
type Directio = 'up' | 'down' | 'left' | 'right';
let toWhere: Directio = 'left';

interface IName{
    name: string;
}
//交叉组合类名的时候考虑type
type IPerson = IName & {age: number};
let person: IPerson = {
    name: 'zhangsan',
    age: 18
}