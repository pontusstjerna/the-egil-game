import 'phaser';
import { Types } from 'phaser';
import StarfallGame from './StarfallGame';
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

window.onload = () => new StarfallGame(config);
