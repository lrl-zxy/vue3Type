//定义一个数字类型的数组
let array: number[] = [1,2,3,4,5]
array.push(1)
function test(){
    //arguments 不是数组
    let num:any[] = arguments
}

//元组 tuple 
let user : [number,string] = [1,'552']
//元组push的时候 只能push已经定义了的类型中的一种
user.push(456)
//push 布尔值就会报错
user.push(false)