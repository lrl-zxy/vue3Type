function add(x:number,y:number,z?:number){
    if(typeof z=="number"){
        return x+y+z
    }else{
        return x+y
    }
} 
//
add(1,4);
add(1,2,3)
//限制类型必须一样
add(1,'555')
//冒号后面都是在声明类型和实际的代码逻辑没有什么关系
let add2:(x:number,y:number,z?:number)=>number = add

//定义函数类型接口  最后面的:number代表返回值类型
interface Isum{
    (x:number,y:number,z?:number):number
}
let add3:Isum = add