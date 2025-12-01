StartupEvents.registry("item", event => {
  event
    .create("mod_sword").swords(swords => {
      swords
      .damage(10)
      .attackSpeed(1.6)
      .glow(true)
      .displayName("Espada de Mods")
      .tooltip("Esta espada solo puede ser usada por un moderador.")
      .maxStackSize(1)
    })
})
