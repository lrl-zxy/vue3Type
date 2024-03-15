type IOperator = 'plus' | 'minus'
// type ICalculator = (operator:IOperator,numbers:number[]) => number;
//定义一个函数接口  （operator: IOperator, numbers: number[]）里面的代表参数类型  ：number代表返回的参数是什么类型
interface ICalculator {
    (operator: IOperator, numbers: number[]): number;
    plus: (numbers: number[]) => number;
    minus: (numbers: number[]) => number;
}
declare const calculator:ICalculator;

export default calculator