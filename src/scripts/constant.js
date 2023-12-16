// Определение формы блока
const iBlock = [
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
];

// Определение формы блока
const oBlock = [
    [2,2],
    [2,2]
];

// Определение формы блока
const tBlock = [
    [0,3,0],
    [3,3,0],
    [0,3,0]
];

// Определение формы блока
const sBlock = [
    [4,0,0],
    [4,4,0],
    [0,4,0]
];

// Определение формы блока
const zBlock = [
    [0,5,0],
    [5,5,0],
    [5,0,0]
];

// Определение формы блока
const lBlock = [
    [6,6,0],
    [0,6,0],
    [0,6,0]
];

// Определение формы блока
const jBlock = [
    [7,7,0],
    [7,0,0],
    [7,0,0]
];


// Массив блоков
const BLOCKS = [iBlock, oBlock, tBlock, sBlock, zBlock, lBlock, jBlock];

// Массив цветов для каждого блока
const COLORS = [
    '#c23616',
    '#0097e6',
    '#44bd32',
    '#e1b12c',
    '#8c7ae6',
    '#e84393',
    '#00cec9'
];

// Цвет для прозрачных ячеек
const TRANSPARENT = 'transparent';

// Направления движения блока
const DIRECTION = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    DOWN: 'DOWN',
    ROTATE: 'ROTATE'
};

// Коды клавиш
const KEY = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
    P: 80
};

// Размеры игрового поля
const GRID_HEIGHT = 20;
const GRID_WIDTH = 10;

// Начальная позиция блока
const START_X = 0;
const START_Y = 4;

// Начальные значения скорости и счета
const START_SCORE = 0;
const START_SPEED = 1000; // 1с

const MAIN_SCORE = 100;
const BONUS_SCORE = 30;

// Состояния игры
const GAME_STATE = {
    PLAY: 'PLAY',
    PAUSE: 'PAUSE',
    END: 'END',
};
