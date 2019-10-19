import 'phaser';
import { Physics, Math } from 'phaser';

const assets: string[] = [
    'doodle1',
    'doodle2',
    'doodle3',
];

class Doodle {

    private image: Physics.Arcade.Image;
    private readonly asset: string;

    constructor() {
        this.asset = assets[Math.Between(0, assets.length - 1)];
    }

    emit(x: number, y: number, physics: Physics.Arcade.ArcadePhysics) {
        this.image = physics.add.image(x, y, this.asset);
        this.image.setDisplaySize(50,50);
        this.image.setVelocity(Math.Between(-10,10), Math.Between(25, 250));
        this.image.setInteractive();
        this.image.setAngularVelocity(Math.Between(-90, 90));
        this.image.on('pointerdown', this.onClick, this);
    }

    private onClick = (): void => {
        this.image.setVelocity(Math.Between(-500, 500), -500);
        //this.image.time.delayedCall(500, star => star.destroy(), [star], this);
        setTimeout(() => this.image.destroy(), 500);
    };
}

export default Doodle;