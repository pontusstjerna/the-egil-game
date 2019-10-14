import 'phaser';
import StarfallGame from './StarfallGame';

const config: GameConfig = {
    title: 'Shitfall',
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#18216D'
};

window.onload = () => new StarfallGame(config);
