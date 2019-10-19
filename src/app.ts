import 'phaser';
import { Types } from 'phaser';
import EgilGame from './EgilGame';
import GameScene from "./GameScene";

const config: Types.Core.GameConfig = {
    title: 'Shitfall',
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#18216D',
    scene: [GameScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    },
};

window.onload = () => new EgilGame(config);
