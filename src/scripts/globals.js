export const gameObject = [];

export const RECT_SIZE = 16;

export const GAME_FIELD_WIDTH = Math.floor(window.screen.availWidth / RECT_SIZE - 1) * RECT_SIZE;
export const GAME_FIELD_HEIGHT = Math.floor(window.screen.availHeight / RECT_SIZE - 6) * RECT_SIZE;

export const FPS = (fps) => 100 / fps;