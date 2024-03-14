function echo<T>(arg: T):T{
    return arg
}

const result = echo(1)

function swap<T,U>(tuple: [T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result2 = swap(['string',123])

function echoWithArr<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg
}

const arrs = echoWithArr([1,2,3])

interface IwithLength{
    length: number
}

//约束泛型
function echoWithLength<T extends IwithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}

const str = echoWithLength('string')
const obj = echoWithLength({length:10})
const arr = echoWithLength([1,2,3])


class Queue<T>{
    private data: T[] = [];
    push(item:T){
        return this.data.push(item)
    }
    pop():T{
        return this.data.shift()
    }
}
const queue = new   Queue<number>()

interface KeyPair<T,U>{
    key:T
    value:U
}

let kp1:KeyPair<number,string> = {key:1,value:'a'}
let kp2:KeyPair<string,number> = {key:'b',value:2}
let arr3:number[] = [1,2,3]
let arrTwo:Array<number> = [1,2,3]