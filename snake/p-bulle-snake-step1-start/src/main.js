import { initSnake, moveSnake, drawSnake } from "./snake.js";
import { generateFood, drawFood } from "./food.js";
import { handleDirectionChange } from "./controls.js";
import { checkCollision, checkWallCollision } from "./collision.js";
import { drawScore } from "./score.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20; // Taille d'une case de la grille en pixels
const gameSpeed = 200; // Vitesse du jeu en millisecondes
let snake; // Variable pour stocker le serpent
let food; // Variable pour stocker la nourriture
let direction = "RIGHT"; // Direction initiale du serpent
let score = 0; // Score initial
let gameInterval; // Variable pour stocker l'identifiant de l'intervalle du jeu
let time = 0; // Temps initial
let timerInterval; // Variable pour stocker l'identifiant de l'intervalle du timer

// Gestion des touches du clavier pour changer la direction du serpent
document.addEventListener("keydown", (event) => {
  direction = handleDirectionChange(event, direction);
});
// Fonction pour démarrer le timer
function startTimer() {
  document.getElementById("divTime").innerHTML = "Time : " + time;
  time++;
}

// Fonction du bouton de redémarrage
divRestartButton.addEventListener("click", function restartGame() {
  clearInterval(timerInterval);
  clearInterval(gameInterval);
  time = 0;
  score = 0;
  direction = "RIGHT";
  startGame();
});

// Fonction pour démarrer le jeu
function startGame() {
  timerInterval = setInterval(startTimer, 1000); // L'intervalle pour le timer, toutes les 1 seconde
  snake = initSnake(); // Initialisation du serpent
  food = generateFood(box, canvas); // Génération de la nourriture

  // Vérification de la collision entre la nourriture et le serpent
  if (food.x == snake[0].x && food.y == snake[0].y) {
    food = generateFood(box, canvas);
  }
  gameInterval = setInterval(draw, gameSpeed); // Stockage de l'identifiant de l'intervalle
}

// Fonction pour dessiner les éléments du jeu
function draw() {
  document.getElementById("divTime").innerHTML = "Time : " + time;
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  snake = moveSnake(snake, direction, box);
  let snakeHead = snake[0];

  if (
    checkCollision(snakeHead, snake.slice(1)) ||
    checkWallCollision(snakeHead, canvas, box)
  ) {
    clearInterval(gameInterval);
    alert("Game Over");
    snake.x = 0;
    snake.y = 0;
    return;
  }

  if (snakeHead.x == food.x && snakeHead.y == food.y) {
    food = generateFood(box, canvas);
    snake.push(snakeHead);
    score++;
  }

  drawSnake(ctx, snake, box);
  drawFood(ctx, food, box);
  drawScore(ctx, score);
}

startGame();
