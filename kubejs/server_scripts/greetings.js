// En server_scripts/player_events.js    
PlayerEvents.loggedIn(event => {    
    // Enviar mensaje a todos los jugadores    
    const name = Text.red(event.player.getGameProfile().getName());    
    const message = Text.green(" se ha unido!");    
    event.server.tell(name.append(message));  
        
    // Enviar mensaje solo al jugador que entró (con los mismos colores)  
    const welcomeName = Text.red(event.player.getGameProfile().getName());  
    const welcomeMsg = Text.green("¡Bienvenido al servidor!");  
    event.player.tell(welcomeName.append(welcomeMsg));  
});
