StartupEvents.registry('item', event => {  
    event.create('mod:sword', 'sword')  
        .texture('custom_sword_texture')  
        .attackDamage(8.0)  
        .attackSpeed(-2.0)  
        .tooltip('Esta espada es solo para moderadores') // Add tooltip  
        .glow(true) // Add glow effect  
})
