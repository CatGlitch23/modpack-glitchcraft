onEvent("player.join", (event) => {
  const player = event.player; // Obtiene el objeto del jugador
  const playerName = player.getName(); // Extrae el nombre del jugador

  // Envía un mensaje privado al jugador que se ha unido
  player.sendMessage(`¡Bienvenido(a) ${playerName} al servidor!`);

  // Anuncia a todos los jugadores que alguien se ha unido
  event.server.runCommand(`say Se ha unido a la partida: ${playerName}`);
});
