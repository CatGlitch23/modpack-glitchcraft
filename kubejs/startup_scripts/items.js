StartupEvents.registry('item', event => {  
    event.create('sword')  
        .texture('mod_sword_texture')  
        .attackDamage(8.0)  
        .attackSpeed(-2.0)  
        .tooltip('Esta espada es solo para moderadores') // Add tooltip  
        .glow(true) // Add glow effect  
})

