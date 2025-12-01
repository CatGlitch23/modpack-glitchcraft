StartupEvents.registry('item', event => {  
    event.create('kubejs:custom_sword', 'sword')  
        .texture('custom_sword_texture')  
        .attackDamage(10.0)  
        .attackSpeed(-2.0)  
        .tooltip('Esta espada es solo para moderadores')  
        .glow(true)  
        .tier(tier => {  
            tier.setAttackDamageBonus(7.0)  
            tier.setUses(1500)  
            tier.setSpeed(8.0)  
        })  
})
