type Direction = 'up' | 'down' | 'left' | 'right';
let move: Direction = 'up';

enum Color {
    Red = 'RED',
    Green = 'GREEN',
    Blue = 'BLUE'
}

let myColor: Color = Color.Red;
myColor = "Abu" as Color;

console.log(Color)