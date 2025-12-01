StartupEvents.registry("item", (event) => {
  event
    .create("sword_mod_custom", "sword")
    .attackDamageBaseline(10)
    .speedBaseline(1.6)
    .displayName("Espada de Moderador")
    .glow(true)
    .maxStackSize(1)
    .tooltip("Una espada especial para moderadores.");
});
