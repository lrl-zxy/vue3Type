//数字枚举类型
enum Direction{
    up,
    down,
    left,
    right,
}
//输出0
console.log(Direction.up);
//输出 up
console.log(Direction[0]);

//字符串类型枚举
enum Color{
    red='红色',
    green='绿色',
    blue='蓝色',
}
const value = '红色';
if(Color.red==value){
    console.log('ok');
}