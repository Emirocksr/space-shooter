controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 9 9 9 9 . . . 
        . . . . . . . 9 9 9 9 5 9 . . . 
        . . 9 9 9 9 9 9 9 5 5 9 9 . . . 
        . . . . . . . . 9 9 9 9 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
})
let enemy_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 6 6 6 6 . 
    . . . . . . . . 6 6 6 6 4 4 4 4 
    . . . . . . . 6 6 6 6 6 6 6 . . 
    . . . . . 8 8 8 8 8 8 8 8 a . . 
    . . 6 6 6 6 6 6 6 6 6 6 a a a . 
    . . . . . 8 8 8 8 8 8 8 8 a . . 
    . . . . . . . . 6 6 6 6 6 6 6 . 
    . . . . . . . . . . . . 6 4 4 4 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    enemy_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 2 . . . . . . . 
        . . . . . . 2 3 2 . . . . . . . 
        . . . . . 3 3 2 2 . . . . . . . 
        . . . . . 3 2 2 2 . . . . . . . 
        . . . . 3 2 2 2 2 . . . . . . . 
        . . 2 3 3 2 2 2 2 . . . . . . . 
        . 2 3 2 2 2 2 2 2 . . . . . . . 
        . . 2 2 2 2 2 2 2 . . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . 3 3 2 2 2 . . . . . . . 
        . . . . . 2 3 2 2 . . . . . . . 
        . . . . . . 3 3 2 . . . . . . . 
        . . . . . . . 3 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy_ship.x = scene.screenWidth()
    enemy_ship.vx = -20
    enemy_ship.y = randint(10, scene.screenHeight() - 10)
})
