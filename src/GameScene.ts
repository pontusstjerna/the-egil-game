import 'phaser';
import { Math } from 'phaser';
import Doodle from "./Doodle";

class GameScene extends Phaser.Scene {

    spawnTimer: number = 0;
    spawnInterval: number = 1000;
    starsCaught: number = 0;
    sand: Phaser.Physics.Arcade.StaticGroup;
    info: Phaser.GameObjects.Text;

    gameOver: boolean = false

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
        this.load.setBaseURL('/');
        this.load.image('doodle1', 'assets/doodle1.png');
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

        this.info = this.add.text(10, 10, '', { font: '24px Arial Bold', fill: '#FBFBAC' });
    }

    // is called every tick and contains the dynamic part of the scene — everything that moves, flashes, etc.
    update(time, delta): void {
        this.spawnTimer += delta;

        if (this.spawnTimer > this.spawnInterval && !this.gameOver) {
            this.emitDoodle();
            this.spawnTimer = 0;
            //this.spawnInterval -= 10
        }
        this.info.text = `Level: ${this.starsCaught}`
    }

    private emitDoodle(): void {
        const x = Math.Between(25, 755);
        const y = 50;
        new Doodle().emit(x, y, this.physics);
    }

    private onFall = (star: Phaser.Physics.Arcade.Image): void => {
        star.setVelocity(0,0);
        star.setAngularVelocity(0);
        star.setTint(0xff0000);

        this.gameOver = true
    };

    private onClick = (star: Phaser.Physics.Arcade.Image): void => {
        star.setTint(0x44ff44);
        star.setVelocity(Math.Between(-500, 500), -500);
        this.starsCaught++;
        this.time.delayedCall(500, star => star.destroy(), [star], this);
    };


}

export default GameScene;
