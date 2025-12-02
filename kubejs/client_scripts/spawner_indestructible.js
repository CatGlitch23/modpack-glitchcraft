BlockEvents.broken('minecraft:spawner', event => {
  event.block.set('minecraft:spawner')
  event.cancel()
})
