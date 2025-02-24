/**
 * Initialise le serpent au début du jeu.
 *
 * Cette fonction crée le serpent en tant que tableau contenant un seul segment,
 * positionné à une position de départ définie sur la grille.
 *
 * @returns {Array<{x: number, y: number}>} - Un tableau contenant un objet représentant la position du premier segment du serpent.
 */
export function initSnake() {
  return [{ x: 0, y: 0 }];
}

/**
 * Déplace le serpent dans la direction actuelle.
 *
 * Cette fonction calcule la nouvelle position de la tête du serpent en fonction
 * de la direction actuelle (gauche, haut, droite, bas). Le reste du corps du serpent
 * suit la tête. La fonction retourne un objet représentant la nouvelle position de la tête du serpent.
 *
 * @param {Array<{x: number, y: number}>} snake - Le tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {string} direction - La direction actuelle du mouvement du serpent ("LEFT", "UP", "RIGHT", ou "DOWN").
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la distance de déplacement du serpent.
 * @returns {{x: number, y: number}} - Un objet représentant les nouvelles coordonnées `x` et `y` de la tête du serpent après le déplacement.
 */
export function moveSnake(snake, direction, box) {
  let newHeadSpawn = { x: snake[0].x, y: snake[0].y }; // Initialise la nouvelle position de la tête du serpent

  // Déplace la tête du serpent en fonction de la direction
  switch (direction) {
    case "LEFT":
      newHeadSpawn.x -= box;
      break;
    case "UP":
      newHeadSpawn.y -= box;
      break;
    case "RIGHT":
      newHeadSpawn.x += box;
      break;
    case "DOWN":
      newHeadSpawn.y += box;
      break;
  }
  snake.unshift(newHeadSpawn); // Ajoute la nouvelle position de la tête du serpent au début du tableau
  snake.pop(); // Supprime le dernier segment du serpent pour le déplacer
  return snake;
}

/**
 * Dessine le serpent sur le canvas.
 *
 * Cette fonction parcourt chaque segment du serpent et le dessine sur le canvas en utilisant
 * un rectangle coloré. La tête du serpent est dessinée dans une couleur différente des autres segments
 * pour la distinguer visuellement. Chaque segment est dessiné à sa position actuelle sur la grille,
 * avec une taille déterminée par la valeur de `box`.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {Array<{x: number, y: number}>} snake - Un tableau représentant le serpent, où chaque élément est un segment avec des coordonnées `x` et `y`.
 * @param {number} box - La taille d'une case de la grille en pixels, utilisée pour déterminer la taille de chaque segment du serpent.
 */
export function drawSnake(ctx, snake, box) {
  // Dessine chaque segment du serpent
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "lightgreen";
    ctx.strokeStyle = "white";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }
  if (snake.length > 0) {
    // Vérifie si le serpent a au moins un segment
    ctx.fillStyle = "green";
    ctx.strokeStyle = "white";
    ctx.fillRect(snake[0].x, snake[0].y, box, box);
    ctx.strokeRect(snake[0].x, snake[0].y, box, box);
  }
}
