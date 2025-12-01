StartupEvents.registry('item', event => {  
    event.create('mod:sword', 'sword')  
        .texture('custom_sword_texture')  
        .tier(tier => {  
            tier.setAttackDamageBonus(7.0) // Additional damage bonus  
            tier.setUses(1500) // Durability  
            tier.setSpeed(8.0) // Mining speed  
        })  
})
