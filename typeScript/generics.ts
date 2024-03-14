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