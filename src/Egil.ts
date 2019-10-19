import 'phaser';
import { Physics, Math } from 'phaser';
import Doodle from "./Doodle";

class Egil {

    bodyImage: Physics.Arcade.Image;

    private size: number = 1;
    private readonly START_SCALE = 0.05;

    constructor(x: number, y: number, physics: Physics.Arcade.ArcadePhysics) {
        this.bodyImage = physics.add.image(x, y, 'egil_body');
        this.bodyImage.setScale(this.START_SCALE);
        //this.bodyImage.setBounce(0,0);
        this.bodyImage.setImmovable(true);

        //this.bodyImage.setDisplaySize(50,50);

        //this.image.setVelocity(Math.Between(-10,10), Math.Between(25, 250));
        //this.bodyImage.setInteractive();
        //this.image.setAngularVelocity(Math.Between(-90, 90));
    }

    update(lowestDoodle: Doodle): void {
        // travel x dist on same T as doodle to fall to me
        // how long for doodle to fall to mouth? deltaY / yVel

        // v = deltaX / t
        this.bodyImage.flipX = lowestDoodle.image.body.x > this.bodyImage.body.x;
        const headX = this.bodyImage.body.x + (this.bodyImage.flipX ? this.bodyImage.scaleX * this.bodyImage.width : 0);
        const deltaX = lowestDoodle.image.body.x - headX;
        const deltaY = this.bodyImage.body.y - lowestDoodle.image.body.y + lowestDoodle.image.height;
        const timeToHit = deltaY / lowestDoodle.image.body.velocity.y;
        const velocity = (deltaX) / timeToHit;

        console.log('vel: ' + velocity);

        this.bodyImage.setVelocityX(velocity);
        this.bodyImage.flipX = velocity > 0;
    }

    hit(): void {
        this.bodyImage.setScale(1.1);
    }

}

export default Egil;