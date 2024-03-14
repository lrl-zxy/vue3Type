let str = '12345'
//第一赋值为什么类型   他就是什么类型  不能再赋值其他类型
str = 123

//union type 联合类型  既可以是string  也可以是number  中间放一个 | 就可以了
let num:number | string = '456'
num =123
//只能访问两种类型的共同属性
num.toString()


//as 就是断言 断言的意思就是  认为变量就是某种类型   input as string 认为input就是string类型
function getLength(input:string | number): number {
    const str = input as string
    if(str.length){
        return str.length
    }else{
        const number = input as number
        return number.toString().length
    }
}

//type guard
function getLength2(input:string | number):number{
    if(typeof input =='string'){
        return input.length
    }else{
        return input.toString().length
    }
}