/**
 * Gère le changement de direction du serpent en fonction de l'entrée de l'utilisateur.
 *
 * Cette fonction est appelée chaque fois qu'une touche directionnelle est pressée.
 * Elle vérifie que la nouvelle direction n'est pas opposée à la direction actuelle
 * (pour éviter que le serpent se retourne sur lui-même) et retourne la nouvelle direction
 * si elle est valide.
 *
 * @param {KeyboardEvent} event - L'événement clavier qui contient les informations sur la touche pressée.
 * @param {string} currentDirection - La direction actuelle du serpent (peut être "UP", "DOWN", "LEFT", ou "RIGHT").
 * @returns {string} - La nouvelle direction du serpent après traitement, ou la direction actuelle si le changement n'est pas valide.
 */
export function handleDirectionChange(event, currentDirection) {
  if (event.code == "ArrowLeft") {
    return "LEFT"; // Retourne la nouvelle direction si la touche pressée est "ArrowLeft"
  } else if (event.code == "ArrowUp") {
    return "UP"; // Retourne la nouvelle direction si la touche pressée est "ArrowUp"
  } else if (event.code == "ArrowRight") {
    return "RIGHT"; // Retourne la nouvelle direction si la touche pressée est "ArrowRight"
  } else if (event.code == "ArrowDown") {
    return "DOWN"; // Retourne la nouvelle direction si la touche pressée est "ArrowDown"
  }

  return currentDirection;
}
