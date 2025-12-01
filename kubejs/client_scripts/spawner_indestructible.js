BlockEvents.modifier(event => {  
  if (event.block.id === 'minecraft:spawner') {  
    event.block.hardness = -1.0  // Indestructible  
    event.block.resistance = 3600000.0  // Resistencia a explosiones  
  }  
})