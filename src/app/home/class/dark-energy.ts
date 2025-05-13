import { IEnergy } from './ienergy';

export class DarkEnergy implements IEnergy {
    private power: number;
    private state: string;

    constructor() {
        this.power = 0;
        this.state = 'unstable';
    }

    charge(): void {
        this.power += 10;
        console.log(`Dark energy charged. Power: ${this.power}`);
    }

    release(): void {
        console.log(`Dark energy released with force: ${this.power}`);
        this.power = 0;
    }

    takeDamage(damage: number): void {
        this.power = Math.max(0, this.power - damage);
        console.log(`Dark energy weakened. Power: ${this.power}`);
    }

    specialAbility(): void {
        console.log('Dark energy consumes light sources nearby...');
        this.power += 15;
    }

    evolve(): void {
        this.state = this.state === 'unstable' ? 'void form' : 'unstable';
        console.log(`Dark energy evolved into: ${this.state}`);
    }
}
