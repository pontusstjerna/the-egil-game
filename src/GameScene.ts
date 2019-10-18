import 'phaser';
import { Math } from 'phaser';

class GameScene extends Phaser.Scene {

    starTimer: number = 0;
    starInterval: number = 1000;
    starsCaught: number = 0;
    starsFallen: number = 0;
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
    update(time, delta): void {
        this.starTimer += delta;

        if (this.starTimer > this.starInterval) {
            this.emitStar();
            this.starTimer = 0;
        }
        this.info.text = `${this.starsCaught} caught - ${this.starsFallen} fallen (max 3)`
    }

    private emitStar(): void {
        /*var star: Phaser.Physics.Arcade.Image;
        var x = Phaser.Math.Between(25, 775);
        var y = 26;
        star = this.physics.add.image(x, y, "star");
        star.setDisplaySize(50, 50);
        star.setVelocity(0, 200);
        star.setInteractive();
        star.on('pointerdown', this.onClick(star), this);
        this.physics.add.collider(star, this.sand,
            this.onFall(star), null, this);*/

        const x = Math.Between(25, 755);
        const y = 26;
        const star: Phaser.Physics.Arcade.Image = this.physics.add.image(x, y, 'star');
        star.setDisplaySize(50,50);
        star.setVelocity(Math.Between(0, 10), Math.Between(25, 250));
        star.setInteractive();
        this.physics.add.collider(star, this.sand, null, null, this);
    }
}

export default GameScene;
