import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const gameSpeed = 200;
let snake;
let food;
let direction = "RIGHT";
let score = 0;
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle

document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});

function startGame() {
  snake = initSnake();
  food = generateFood(box, canvas);
  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

function draw() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  snake = moveSnake(snake, direction, box);
  let snakeHead = snake[0];

  if (
    checkCollision(snakeHead, snake.slice(1)) ||
    checkWallCollision(snakeHead, canvas, box)
  ) {
    clearInterval(gameInterval);
    alert("Game Over");
    return;
  }

  if (snakeHead.x == food.x && snakeHead.y == food.y) {
    food = generateFood(box, canvas);
    drawSnake(ctx, snake, box);
    snake.push(snakeHead);
    score++;
  }

  drawSnake(ctx, snake, box);
  drawFood(ctx, food, box);
  drawScore(ctx, score);
}

startGame();
