import 'phaser';
import { Physics, Math } from 'phaser';
import Egil from "./Egil";

const assets: string[] = [
    'doodle1',
    'doodle2',
    'doodle3',
];

class Doodle {

    image: Physics.Arcade.Image;
    isHit: boolean = false;
    private readonly asset: string;

    constructor() {
        this.asset = assets[Math.Between(0, assets.length - 1)];
    }

    emit(x: number, y: number, physics: Physics.Arcade.ArcadePhysics) {
        this.image = physics.add.image(x, y, this.asset);
        this.image.setDisplaySize(50,50);
        this.image.setVelocity(0, Math.Between(25, 250));
        this.image.setInteractive();
        this.image.setAngularVelocity(Math.Between(-90, 90));
        this.image.on('pointerdown', this.onClick, this);
    }

    hit(): void {
        this.image.destroy();
        this.isHit = true;
    }

    private onClick = (): void => {
        this.image.setVelocity(Math.Between(-500, 500), -500);
        setTimeout(() => this.image.destroy(), 500);
    };

}

export default Doodle;