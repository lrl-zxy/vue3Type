// .d的意思就是declaration
// 它里面没有任何的实际实现代码，只有类型声明
// declare function axios(url:string):string
interface IAxios{
    get:(url:string)=>string;
    post:(url:string,data:any)=>string;
}
declare const axios:IAxios;