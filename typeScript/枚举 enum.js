//数字枚举类型
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
//输出0
console.log(Direction.up);
//输出 up
console.log(Direction[0]);
//字符串类型枚举
var Color;
(function (Color) {
    Color["red"] = "\u7EA2\u8272";
    Color["green"] = "\u7EFF\u8272";
    Color["blue"] = "\u84DD\u8272";
})(Color || (Color = {}));
var value = '红色';
if (Color.red == value) {
    console.log('ok');
}
