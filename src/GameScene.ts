import 'phaser';

class GameScene extends Phaser.Scene {

    delta: number;
    lastStarTime: number;
    starsCaught: number;
    starsFallen: number;
    sand: Phaser.Physics.Arcade.StaticGroup;
    info: Phaser.GameObjects.Text;

    constructor() {
        super({ key: "GameScene" });
    }

    // called when the scene starts; this function may accept parameters,
    // which are passed from other scenes or game by calling
    init(params): void {
        // TODO
    }

    // is called before the scene objects are created, and it contains loading assets;
    // these assets are cached, so when the scene is restarted, they are not reloaded
    preload(): void {
        this.load.setBaseURL('https://raw.githubusercontent.com/mariyadavydova/starfall-phaser3-typescript/master/');
        this.load.image('star', 'assets/star.png');
        this.load.image('sand', 'assets/sand.jpg');
    }

    // is called when the assets are loaded and usually contains creation of the main game objects
    // (background, player, obstacles, enemies, etc.)
    create(): void {
        this.sand = this.physics.add.staticGroup({
            key: 'sand',
            frameQuantity: 20
        });

        Phaser.Actions.PlaceOnLine(
            this.sand.getChildren(),
            new Phaser.Geom.Line(20, 580, 820, 580)
        );

        this.sand.refresh();

        this.info = this.add.text(10, 10, 'Bajsenkorva', { font: '24px Arial Bold', fill: '#FBFBAC' });
    }

    // is called every tick and contains the dynamic part of the scene — everything that moves, flashes, etc.
    update(time): void {
        // TODO
    }
}

export default GameScene;
