StartupEvents.registry("item", (event) => {
  event
    .create("sword_mod_custom", "sword")
    .attackDamageBaseline(10)
    .speedBaseline(1.6)
    .displayName("§aEspada de Moderador")
    .glow(true)
    .maxStackSize(1)
    .tooltip("§eUna espada especial para moderadores.");
});
