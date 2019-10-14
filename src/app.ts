import 'phaser';
import { Types } from 'phaser';
import StarfallGame from './StarfallGame';

const config: Types.Core.GameConfig = {
    title: 'Shitfall',
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#18216D'
};

window.onload = () => new StarfallGame(config);
